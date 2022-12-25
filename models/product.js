const mongoose = require("mongoose");
const product = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const Product = mongoose.model("Product", product);
module.exports = Product;
