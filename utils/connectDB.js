const mongoose = require("mongoose");
require("dotenv").config();
const { CONNECTION_URI } = require("../constants");

const connectMongoDB = async () => {
  try {
    await mongoose.connect(CONNECTION_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Database connect");
  } catch (error) {
    console.log("No connect DB", error);
    process.exit(1);
  }
};

module.exports = connectMongoDB;
