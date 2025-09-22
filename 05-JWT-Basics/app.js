require("dotenv");

const express = require("express");
const app = express();

const notFoundMiddlewaer = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const router = require("./routes/route");

app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1", router);

app.use(notFoundMiddlewaer);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
