const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true, minlength: 5, maxlength: 50 },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  image: { type: String, default: "https://via.placeholder.com/150" }
});

module.exports = mongoose.model("User", UserSchema);
module.exports = function(user) {
  const schema = Joi.object().keys({
    name: Joi.string()
      .min(5)
      .max(50)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  });
  return Joi.validate(user, schema);
};
