const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.use((req, res) => {
  res.status(404).send("page not found");
});

app.listen(5000, () => {
  console.log("example app listening on port 5000...");
});
