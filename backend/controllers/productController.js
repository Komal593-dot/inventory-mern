const Product = require("../models/Product");

// GET PRODUCTS
const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// ADD PRODUCT
const addProduct = async (req, res) => {
  const { name, price, quantity } = req.body;

  const newProduct = new Product({
    name,
    price,
    quantity,
    sold: 0
  });

  await newProduct.save();

  res.json({ message: "Product Added ✅" });
};

// DELETE PRODUCT
const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted ✅" });
};

// ✅ BUY PRODUCT (FIXED)
const buyProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found ❌" });
  }

  if (product.quantity <= 0) {
    return res.status(400).json({ message: "Out of stock ❌" });
  }

  product.quantity -= 1;   // decrease stock
  product.sold += 1;       // increase sold

  await product.save();

  res.json({ message: "Product Issued ✅" });
};

module.exports = {
  getProducts,
  addProduct,
  deleteProduct,
  buyProduct
};