// // these are called controller cause they handle the logic between diff routes

// const fs = require("fs");
// const index = fs.readFileSync("index.html", "utf-8");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const users = data.users;

// exports.CreateUser = (req, res) => {
//   const createUser = req.body;
//   users.push(createUser);
//   res.status(200).json({ message: "User Created successfully", createUser });
// };

// exports.getAllUser = (req, res) => {
//   res.json(users);
// };

// exports.getUser = (req, res) => {
//   const id = +req.params.id;
//   const user = users.find((p) => p.id === id);
//   res.json(user);
// };

// exports.replaceUser = (req, res) => {
//   const id = +req.params.id;
//   const userIndex = users.findIndex((p) => p.id === id);
//   users.splice(userIndex, 1, { ...req.body, id: id });
//   const newUser = { ...req.body, id: id };

//   res.status(200).json({ message: "User updated successfully", newUser });
// };

// exports.updateUser = (req, res) => {
//   const id = +req.params.id;
//   const userIndex = users;
//   const user = users.find((p) => p.id === id);
//   res.json(user);
// };
// // delete product
// exports.deletedUser = (req, res) => {
//   const id = +req.params.id;
//   const userIndex = users.findIndex((p) => p.id === id);
//   const deleteUser = users[userIndex];
//   users.splice(userIndex, 1);
//   res.status(200).json({ message: "User deleted successfully", deleteUser });
// };
 