const jwt = require("jsonwebtoken");
const { UnAuthenticatedError } = require("../errors");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnAuthenticatedError("No Token Provided", 401);
  }

  const token = authHeader.split(" ")[1];
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decode.username);
    if (decode.username) {
      req.username = decode.username;
      next();
    }
  } catch (error) {
    throw new UnAuthenticatedError("Not Authorized to access this route", 401);
  }
};

module.exports = authMiddleware;
