require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const errorMiddleware = require("./middleware/error-handler");
const notFoundMiddlewaer = require("./middleware/not-found");
const connectToDb = require("./db/connect");
const router = require("./routes/router");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("productz ");
});

app.use("/api/v1/products", router);

app.use(notFoundMiddlewaer);
app.use(errorMiddleware);
const start = async () => {
  try {
    await connectToDb(process.env.MONGO_URI);
    app.listen(5000, () => {
      console.log(`Example app listening on : ${5000}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
