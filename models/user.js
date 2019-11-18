const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true, minlength: 5, maxlength: 255 },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, default: "https://via.placeholder.com/150" }
});

module.exports = mongoose.model("User", UserSchema);
