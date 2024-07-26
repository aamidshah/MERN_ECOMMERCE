
const mongoose = require('mongoose')
const {Schema} = mongoose;

// these are validations or configuratoins for storing our data in 
// 
// db 
// SCHEMA   we can basically define schema as validations or configurations  for collections  that are needed to store the data in database 

const productSchema = new Schema({
  productCategory: {type: String , required: [true, 'Please enter a valid catagoery'] },
  name: {type: String , required: true, unique: true},
  brand: {type: String , required: true},
  description: String,
  basePrice: {type: Number, min:[2, 'Wrong price'],required: true},
  inStock: Boolean,
  stock: {type: Number, min:[0, 'Wrong min stock'], max:[100,'Wrong max stock' ]},
  thumbnailImage: String,
  featuredImage:[{type: String , required: true}],
  storageOptions: [String],
  colorOptions: [String],
  display: String,
  CPU: String,
  camera: {
    rearCamera: String,
    frontCamera: String
  }
});


exports.Product = mongoose.model('Product', productSchema);
// here 'product ' is the name of the collection that will be connected to the product schema 

