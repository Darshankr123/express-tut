// const { CustomAPIError } = require("../errors/custom-api");
const { StatusCodes } = require("http-status-codes");
const { CustomApiError } = require("../errors");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
  //   next();
};

module.exports = errorHandlerMiddleware;
