const Product = require("../models/product");
//To list all products
module.exports.listAll = async function (req, res) {
  try {
    let products = await Product.find({}); //Find all product
    return res.status(200).json({
      message: "List of All Products",
      data: {
        products: products,
      },
    });
  } catch (e) {
    return res.status(500).json({
      message: "Error in displaying all Products",
    });
  }
};
//To create product
module.exports.create = async function (req, res) {
  try {
    let products = await Product.find({});
    let product = await Product.create({
      id: products.length + 1,
      name: req.body.name,
      quantity: req.body.quantity,
    });
    products.push(product); //find all product and pushing a product
    return res.status(200).json({
      message: "Product create Successfully",
      data: {
        products: products,
      },
    });
  } catch (e) {
    return res.status(500).json({
      message: "Error in create product",
    });
  }
};
//to delete a product
module.exports.delete = async function (req, res) {
  try {
    await Product.deleteOne({ id: req.params.id }); //delete product whose id matches
    return res.status(200).json({
      message: "Product deleted Successfully",
    });
  } catch (e) {
    return res.status(500).json({
      message: "Error in deleting product",
    });
  }
};
//to update Product
module.exports.update = async function (req, res) {
  try {
    let product = await Product.findOne({ id: req.params.id }); //find by id
    product.quantity += parseInt(req.query.number); //updating quantity
    await product.save();
    return res.status(200).json({
      message: "Product updated Successfully",
      data: {
        product: product,
      },
    });
  } catch (e) {
    return res.status(500).json({
      message: "Error in Updating quantity of product",
    });
  }
};
