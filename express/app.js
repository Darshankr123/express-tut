const express = require("express");
const app = express();

const { people } = require("./data.js");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = require("./5-routerExe.js");
const authRouter = require("./6-AuthRouter.js");

app.use("/api/v1", router);
app.use("/api/v1", authRouter);

app.listen(5000, () => {
  console.log("example app listening with port : 5000");
});
