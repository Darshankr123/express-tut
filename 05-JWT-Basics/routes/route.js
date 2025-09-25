const { Router } = require("express");
const { login, dashboard } = require("../controllers/main");
const router = Router();
const authMiddleware = require("../middleware/auth");

router.route("/login").post(login);
router.route("/dashboard").get(authMiddleware, dashboard);

module.exports = router;
