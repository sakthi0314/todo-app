import axios from "./axios";

const fetchTodos = () => axios.get("/todos");
const createTodo = (newPost) => axios.post("/todos", newPost);
const updateTodo = (id, updatedTodo) =>
  axios.patch(`/todos/${id}`, updatedTodo);
const deleteTodo = (id) => axios.delete(`/todos/${id}`);

export { fetchTodos, createTodo, updateTodo, deleteTodo };
