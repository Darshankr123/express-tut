const getAllProducts = (req, res) => {
  res.status(200).json({
    msg: "Products",
  });
};
const getAllProductsStatic = (req, res) => {
  res.status(200).json({
    msg: "Products static",
  });
};

module.exports = { getAllProducts, getAllProductsStatic };
