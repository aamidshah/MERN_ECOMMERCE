// creating first web server  using node

const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const { type } = require("os");

// a third party middleware 
const morgan = require('morgan')



// create a server 

const server = express();

// body parsers
server.use(express.json())
// server.use(express.urlencoded())


// use morgan middleware 
// server.use(morgan('default'))

// static hosting 
server.use(express.static("public"));


// MIDDLEWARE  A SEQUENCE OF FILTERS
// application level middleware

// server.use((req, resp, next) => {
//   console.log(req.method, req.ip, req.hostname);
//   next();
// });

// authentication middleware
const auth = (req, res, next) => {
  console.log(req.method);

  // if (req.body.password == "123") {
  //   next();
  // } else {
  //   res.send("You are not allowed to access this page");
  // }
  next()
};

// using auth middleware
server.use(auth);

// or we can directly use it on some specific pages or routes like  for posting something user should be athenticted etc ... like we have done below

// APIS OR ENDPOINTS
server.get("/product/:id", auth, (req, res) => {
  console.log(req.params)
  res.json({ type: "GET" });
});

server.post("/", auth, (req, res) => {
  res.json({ type: "POST" });
});

server.put("/", auth, (req, res) => {
  res.json({ type: "PUT" });
});
server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});
server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});

server.get("demo", (req, res) => {
  // res.send('<h1>ndex</h1>')
  // res.sendFile("./index.html")
  // res.json(products)
  res.sendStatus(404);
});

server.listen(8080, () => {
  console.log("server started");
});
