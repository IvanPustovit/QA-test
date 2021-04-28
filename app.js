const express = require("express");
require("dotenv").config();
const userController = require("./controllers/userController");
const ticketController = require("./controllers/ticketController");
const connectMongoDB = require("./utils/connectDB");
const { PORT } = require("./constants");

const app = express();
app.use(express.json());

app.post("/create", userController.postUser);
app.get("/users", userController.getUser);
app.post("/ticket", ticketController.postTicket);
app.get("/tickets", ticketController.getTicket);

const start = async () => {
  try {
    await connectMongoDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
