const express = require("express");
const app = express();
const port = 5000;

const { router } = require("./routers/route");
const connectToDb = require("./db/connect");
require("dotenv").config();

app.use("/api/v1/tasks", router);

// app.get("/", getAllTasks);

const start = async () => {
  try {
    await connectToDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("example app listening on port 5000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
