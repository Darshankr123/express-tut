const notFoundMiddlewaer = (erq, res) => {
  return res.status(500).json({
    msg: "Page not found",
  });
};

module.exports = notFoundMiddlewaer;
