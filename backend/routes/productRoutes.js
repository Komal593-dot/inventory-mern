const express = require("express");

const {
  getProducts,
  addProduct,
  deleteProduct,
  issueProduct,
  getReport
} = require("../controllers/productController");

const router = express.Router();

router.get("/", getProducts);
router.post("/", addProduct);
router.delete("/:id", deleteProduct);
router.post("/issue/:id", issueProduct);
router.get("/report", getReport);

module.exports = router;