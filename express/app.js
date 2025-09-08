const express = require("express");
const app = express();

const { people } = require("./data.js");

app.get("/", (req, res) => {
  res.status(200).json({ people });
});

app.listen(5000, () => {
  console.log("example app listening with port : 5000");
});
