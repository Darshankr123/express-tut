const getAllTasks = (req, res) => {
  res.status(200).json({
    msg: "All Tasks",
  });
};

const createTask = (req, res) => {
  res.status(200).json({
    msg: "Task created successfully",
  });
};
const UpdateTask = (req, res) => {
  res.status(200).json({
    msg: "Task updated successfully",
  });
};
const getSingleTask = (req, res) => {
  res.status(200).json({
    msg: "get single Task",
  });
};
const deleteTask = (req, res) => {
  res.status(200).json({
    msg: "Task deleted",
  });
};

module.exports = {
  getAllTasks,
  createTask,
  UpdateTask,
  getSingleTask,
  deleteTask,
};
