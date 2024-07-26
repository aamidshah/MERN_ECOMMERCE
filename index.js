// creating first web server  using
// model view controller to manage code
require('dotenv').config()
const express = require("express");
const { type } = require("os");
// a third party middleware
const morgan = require("morgan");
const mongoose = require('mongoose')
const cors = require('cors')
const {Schema} = mongoose;
const path = require('path')

// create a server
const server = express();

// import  diff api routes
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
console.log(process.env.DB_PASSWORD )


// db connection 

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("connected to db")
}




// body parser
server.use(express.json());
// server.use(express.static(process.env.PUBLIC_DIR));
server.use(express.static(path.join(__dirname, process.env.PUBLIC_DIR,'build')));
server.use(cors());
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);
server.use('*',(req,res)=>{
  console.log(path.join(__dirname, 'public', 'build', 'index.html'));
  res.sendFile(path.join(__dirname, process.env.PUBLIC_DIR, 'build', 'index.html'));

  // res.sendFile('/public/build/index.html')
}
)



server.listen(process.env.PORT, () => {
  console.log("server started");
});
