const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  name: String,
  completed: false,
});

const Task = mongoose.model("Tasks", TaskSchema);

module.exports = Task;
