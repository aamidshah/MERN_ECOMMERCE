const express = require("express");
const router = express.Router();
const userController = require("../controller/user")


router
.post("/",userController.CreateUser)
.get("/",userController.getAllUser )
.get("/:id",userController.getUser)
.put("/:id", userController.replaceUser)
.patch("/:id",userController.updateUser)
.delete("/:id",userController.deletedUser);


exports.router = router