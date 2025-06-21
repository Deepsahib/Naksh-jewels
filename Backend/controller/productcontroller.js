const Product = require("../models/productmodel");

// GET all products
exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// POST new product
exports.addProduct = async (req, res) => {
  const { name, price, imageUrl } = req.body;
  if (!name || !price || !imageUrl) {
    return res.status(400).json({ message: 'All fields required' });
  }

  const newProduct = new Product({ name, price, imageUrl });
  const saved = await newProduct.save();
  res.status(201).json(saved);
};

// DELETE product by ID
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  const deleted = await Product.findByIdAndDelete(id);
  if (!deleted) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json({ message: 'Product deleted' });
};
