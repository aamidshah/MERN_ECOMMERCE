// // creating first web server  using
// // model view controller to manage code
// require('dotenv').config()
// const express = require("express");
// const { type } = require("os");
// // a third party middleware
// const morgan = require("morgan");
// const mongoose = require('mongoose')
// // create a server
// const server = express();

// // import  diff api routes
// const productRouter = require("./routes/product");
// const userRouter = require("./routes/user");
// console.log(process.env.DB_PASSWORD )


// // db connection 

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
//   console.log("connected to db")

 
// }

// // body parser
// server.use(express.json());
// server.use(express.static(process.env.PUBLIC_DIR));

// // middleware  here we  to base url or we can simply use /  or anything we want
// server.use("/products", productRouter.router);
// server.use("/users", userRouter.router);





// server.listen(process.env.PORT, () => {
//   console.log("server started");
// });
