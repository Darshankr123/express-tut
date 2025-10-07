const { StatusCodes } = require("http-status-codes");

const NotFoundMiddleWare = (req, res, next) => {
  res.status(StatusCodes.NOT_FOUND).json({
    msg: "Page not found",
  });
};

module.exports = NotFoundMiddleWare;
