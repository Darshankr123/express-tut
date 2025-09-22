const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomAPIError("Please privide the valid user", 400);
  }
  const token = jwt.sign(req.body, "secret");
  return res.status(200).json({ token });
};
const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, Jhon Doe`,
    secret: `Here is your authorized data, Your lucky number is ${luckyNumber}`,
  });
  res.send("register");
};

module.exports = { login, dashboard };
