const { Router } = require("express");

const router = Router();
const { people } = require("./data");
const {
  getPeople,
  addPeople,
  updatePeople,
  deletePeople,
} = require("./controllers/people");

router.get("/", getPeople);

router.post("/people", addPeople);

router.put("/people/:id", updatePeople);

router.delete("/delete/:id", deletePeople);

module.exports = router;
