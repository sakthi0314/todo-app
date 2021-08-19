const mongoose = require("mongoose");

const todoScheme = mongoose.Schema({
  task: {
    type: String,
  },
  desc:{
    type: String,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const todoModel = mongoose.model("Todo", todoScheme);

module.exports = todoModel;
