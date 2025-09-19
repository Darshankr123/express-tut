const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { name, featured, company, sort, feilds } = req.query;

  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = {
      $regex: name,
      $options: "i",
    };
  }
  let result = Product.find(queryObject);

  //   sort
  if (sort) {
    const sorttedList = sort.split(",").join(" ");
    result = result.sort(sorttedList);
  } else {
    result = result.sort("createdAt");
  }

  //   feilds
  if (feilds) {
    const feildsList = feilds.split(",").join(" ");
    result = result.select(feildsList);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const products = await result;

  res.status(200).json({
    products,
    nhBits: products.length,
  });
};
const getAllProductsStatic = async (req, res) => {
  const { name, feilds } = req.query;
  let products = await Product.find({}).select("name price").limit(5);
  //   console.log("Hello");

  res.status(200).json({
    products,
    nhBits: products.length,
  });
};

module.exports = { getAllProducts, getAllProductsStatic };
