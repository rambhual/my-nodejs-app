const winston = require("winston");
require("winston-mongodb");
require("express-async-errors");

module.exports = function() {
  winston.handleExceptions(
    new winston.transports.File({ filename: "uncaughtExceptions.log" })
  );

  process.on("unhandledRejection", ex => {
    throw ex;
  });

  winston.add(winston.transports.File, { filename: "logfile.log" });
  winston.add(winston.transports.MongoDB, {
    db:
      "mongodb+srv://ramprit:hnFETZdFU5rauZVV@ramprit-ecommerce-y4ku2.mongodb.net/ramprit-ecommerce",
    level: "info"
  });
};
