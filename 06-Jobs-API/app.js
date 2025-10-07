require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./db/connect");
const port = process.env.port || 3000;

const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddleWare = require("./middleware/not-found");
const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");

app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/job", jobsRouter);

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("example app listening on port : ", port);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
