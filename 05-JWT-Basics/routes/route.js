const { Router } = require("express");
const { login, dashboard } = require("../controllers/main");
const router = Router();

router.route("/login").post(login);
router.route("/dashboard").get(dashboard);

module.exports = router;
