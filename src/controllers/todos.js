const Todo = require("../models/todo");

const getTodos = async (req, res) => {
  try {
    const todo = await Todo.find({});
    res.status(200).json(todo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createTodo = async (req, res) => {
  const todo = req.body;
  const newTodo = new Todo(todo);
  try {
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateTodo = async (req, res) => {
  const _id = req.params.id;
  const todo = req.body;
  const updatedTodo = await Todo.findByIdAndUpdate(_id, todo, { new: true });
  res.json(updatedTodo);
};

const deleteTodo = async (req, res) => {
  const _id = req.params.id;
  await Todo.findByIdAndRemove(_id);
  res.json({ message: "todo deleted " });
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
