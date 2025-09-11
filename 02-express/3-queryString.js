const express = require("express");

const app = express();
const { products } = require("./data.js");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const newProductsList = products.map((item) => {
    const { id, image, name } = item;
    return { id, image, name };
  });
  res.status(200).json({ newProductsList });
});

app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;

  const singleProduct = products.find((item) => item.id == productId);
  //   console.log(singleProduct);

  if (!singleProduct) {
    return res.status(400).json({
      msg: "No such product exists ",
    });
  }

  res.status(200).json({
    singleProduct,
  });
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  console.log(search);
  console.log(limit);

  let sortedProducts = [...products];

  if (search || limit) {
    sortedProducts = sortedProducts
      .filter((product) => product.name.includes(search))
      .slice(0, Number(limit));
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    return res.status(200).json({
      success: true,
      data: [],
    });
  }

  res.send({
    sortedProducts,
  });
});

app.listen(5000, (req, res) => {
  console.log("app listening on port 5000");
});
