const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: {
    type: Number,
    default: 1
  },
  sold: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("Product", productSchema);