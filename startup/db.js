const winston = require("winston");
const mongoose = require("mongoose");

module.exports = function() {
  mongoose
    .connect(
      "mongodb+srv://ramprit:hnFETZdFU5rauZVV@ramprit-ecommerce-y4ku2.mongodb.net/ramprit-ecommerce",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      winston.info("connected to Mongo DB");
    });
};
