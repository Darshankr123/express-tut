const express = require("express");
const app = express();
const port = 5000;

const { router } = require("./routers/route");
const connectToDb = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.static("./public"));

app.use(express.json());
app.use("/api/v1/tasks", router);
// app.get("/", getAllTasks);

app.use(notFound);

app.use(errorHandlerMiddleware);

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
