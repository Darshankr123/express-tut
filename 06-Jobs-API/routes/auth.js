const { Router } = require("express");
const { login, register } = require("../controllers/auth");

const authRouter = Router();

authRouter.post("/login", login);
authRouter.route("/register").post(register);

module.exports = authRouter;
