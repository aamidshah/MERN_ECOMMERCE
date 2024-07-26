
require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const server = express();

const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
console.log(process.env.DB_PASSWORD )


 

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("connected to db")
}




server.use(express.json());
server.use(express.static(path.join(__dirname, process.env.PUBLIC_DIR)));
server.use(cors());
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

server.use('*',(req,res)=>{
  
  res.sendFile(path.join(__dirname, process.env.PUBLIC_DIR, 'index.html'));

}
)



server.listen(process.env.PORT, () => {
  console.log("server started");
});
