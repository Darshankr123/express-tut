const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: [20, "Max length has to be 20 character"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Tasks", TaskSchema);

module.exports = Task;
