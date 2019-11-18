const express = require("express");
const error = require("../middleware/error");
const products = require("../routes/products");

//TODO: i will refactor this after some time later

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/products", products);
  app.use(error);
};
