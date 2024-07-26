// creating first web server  using node

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

// static hosting 
server.use(express.static("public"));


// APIS OR ENDPOINTS
// API ROOT , BASE URL, eg http://localhost:8080


// REST API S 
// Create POST /products   C R U D operations
server.post("/products", (req, res) => {
console.log(req.body)
  products.push(req.body)

  res.json(req.body);
});


//Read  GET /products  USED TO READ ALL DATA FROM API
server.get("/products", (req, res) => {
  res.json({ products });
});

// Read GET .product/:id  USED TO READ SINGLE DATA BASED ON ID
server.get("/products/:id", (req, res) => {
  // adding plus converts a string id into no id 
  const id = +req.params.id;
  const product = products.find(p=>p.id===id)
  res.json({ product});
});


// update PUT .product/:id
// it over rides the previos data  in array
server.put("/products/:id", (req, res) => {
  // adding plus converts a string id into no id 
  const id = +req.params.id;
  const productIndex = products.findIndex(p=>p.id===id)

  // splice takes 3 params  ist is index  sec is how many eements to be dleted and 3rd is new object   
  products.splice(productIndex, 1,{...req.body, id:id} )
  const newProdut ={...req.body,id:id}

  res.status(200).json({ message: "Product updated successfully", newProdut })});

// updte PATCH /product/:id 
// it doesnt over ride the data rather uodates only the data that needs to be updated 

server.patch("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex(p=>p.id===id)


  const updatedProduct =  {...products[productIndex],...req.body.product} 
  products[productIndex] = updatedProduct


  res.status(200).json({ message: "Product updated successfully", updatedProduct });


});


// delete  DELETE /product/:id

server.delete("/products/:id", (req, res) => {
  // adding plus converts a string id into no id 
  const id = +req.params.id;
  const productIndex = products.findIndex(p=>p.id===id)
  const deletedProduct = products[productIndex]
 
  products.splice(productIndex, 1 )

  res.status(200).json({ message: "Product updated successfully",     deletedProduct })
});




server.listen(8080, () => {
  console.log("server started");
});



// server.put("/", (req, res) => {
//   res.json({ type: "PUT" });
// });

// server.patch("/", (req, res) => {
//   res.json({ type: "PATCH" });
// });

// server.delete("/", (req, res) => {
//   res.json({ type: "DELETE" });
// });

// server.get("demo", (req, res) => {
//   res.sendStatus(404);
// });