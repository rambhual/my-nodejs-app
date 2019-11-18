const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String, required: true, minlength: 5, maxlength: 255 },
  description: { type: String, required: true, minlength: 5, maxlength: 1024 },
  image: { type: String, default: "https://via.placeholder.com/150" },
  price: { type: Number, min: 0, required: true },
  published: { type: Boolean, default: false }
});

module.exports = mongoose.model("Product", ProductSchema);
