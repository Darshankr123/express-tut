const { Router } = require("express");
const router = Router();

const { people } = require("./data");

router.post("/login", (req, res) => {
  const { name } = req.body;

  const isPeople = people.map((item) => item.name === name);

  if (!isPeople) {
    return res.status(400).json({
      success: false,
      msg: "user not found",
    });
  }

  res.status(200).json({
    msg: "login successfull",
  });
});

module.exports = router;
