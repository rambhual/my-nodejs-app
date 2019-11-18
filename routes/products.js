const express = require("express");
const Product = require("../models/product");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json(products);
});

router.post("/", async (req, res, next) => {
  const { name, description, image, price, published } = req.body;
  const product = new Product({
    name,
    description,
    image,
    price,
    published
  });
  const result = await product.save();
  res.status(201).json(result);
});

module.exports = router;
