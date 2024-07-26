// these are called controller cause they handle the logic between diff routes

const model = require("../model/product");
const Product = model.Product;
const mongoose = require("mongoose");

// create product
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    // here new keyword is used to create a new instance since we have to create a new product 
    const savedProduct = await product.save();
    res
      .status(200)
      .json({ message: "Product Created successfully", product: savedProduct });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// get all products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

// get single product based on id
exports.getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// update the existing product by replacing the all existing properties
exports.replaceProducts = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json({ message: "Product updated successfully", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// update only those properties that needs to be updated  not all like put method
// exports.updatedProduct =

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json({ message: "Product updated successfully", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// delete product
exports.deletedProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndDelete({ _id: id }, req.body);
    res.status(200).json({ message: "Product deleted successfully", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
