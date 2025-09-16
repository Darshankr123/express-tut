const Task = require("../models/tasks");
const asyncWrapper = require("../middleware/async");

const { createCustomError } = require("../errors/custome-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json(tasks);
});

const createTask = asyncWrapper(async (req, res) => {
  const newTask = req.body;

  console.log(newTask);

  if (newTask) {
    const isTaskExist = await Task.findOne({ name: req.body.name });

    if (isTaskExist) {
      return res.status(400).json({
        msg: "Task already exists",
      });
    }

    const createNewTask = new Task(newTask);
    createNewTask.save();

    return res.status(201).json({
      task: createNewTask,
    });
  } else {
    return res.status(400).json({
      msg: "Please provide the Tasks",
    });
  }
});
const UpdateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  // console.log(req.body);

  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({
      msg: "No Such task id is exist",
    });
  }
  res.status(200).json({
    msg: "Task Updated successfully",
  });
});
const getSingleTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;

  const singleTask = await Task.findOne({ _id: id });
  if (!singleTask) {
    return next(createCustomError(`No ${id} exists`, 404));
  }
  res.status(200).json({ task: singleTask });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;

  const task = await Task.findOneAndDelete({ _id: id });
  if (!task) {
    return res.status(404).json({ msg: `not task exist with id : ${id}` });
  }
  res.status(200).json({
    msg: "Task deleted successfully",
  });
});

module.exports = {
  getAllTasks,
  createTask,
  UpdateTask,
  getSingleTask,
  deleteTask,
};
