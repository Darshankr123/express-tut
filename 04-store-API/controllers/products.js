const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { name, featured, company, sort, feilds, numericFilters } = req.query;

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

  //   pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);

  //   numaric filters
  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };

    const regEx = /\b(<|>|>=|=|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );

    const options = ["price", "rating"];
    filters = filters.split(",").array.forEach((item) => {
      console.log(item);

      const [feild, operator, value] = item.split("-");
      if (options.includes(feild)) {
        queryObject[feild] = { [operator]: Number(value) };
      }
    });
    console.log(filters);
  }

  console.log(queryObject);

  const numericFilter = Number(req.query.numericFilters) || 0;

  const products = await result;

  res.status(200).json({
    products,
    nhBits: products.length,
  });
};
const getAllProductsStatic = async (req, res) => {
  const { name, feilds } = req.query;
  let products = await Product.find({
    price: {
      $gt: 30,
    },
  })
    .sort("price")
    .select("name price")
    .limit(30);
  //   console.log("Hello");

  res.status(200).json({
    products,
    nhBits: products.length,
  });
};

module.exports = { getAllProducts, getAllProductsStatic };
