const Authorize = (req, res, next) => {
  console.log("Authorize");
  next();
};

module.exports = Authorize;
