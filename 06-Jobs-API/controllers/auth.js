const { StatusCodes } = require("http-status-codes");
const User = require("../models/user");
const { BadRequestError } = require("../errors");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hasedPassword = await bcrypt.hash(password, salt);

  const tempUser = { name, email, password: hasedPassword };

  if (!name || !email || !password) {
    console.log("Exeception");

    throw new BadRequestError("pls provide name,email and password");
  }

  const user = await User.create({ ...tempUser });

  res.status(StatusCodes.CREATED).json({
    user,
  });
};

const login = (req, res) => {
  res.send("login user");
};

module.exports = {
  register,
  login,
};
