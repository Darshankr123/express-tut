const { Router } = require("express");
const {
  getAllTasks,
  createTask,
  getSingleTask,
  UpdateTask,
  deleteTask,
} = require("../controllers/tasks");
const router = Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getSingleTask).patch(UpdateTask).delete(deleteTask);

module.exports = { router };
