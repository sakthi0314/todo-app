import { actionType } from "../actions/actionTypes";

const todosReducer = (todos = [], { type, payload }) => {
  switch (type) {
    case actionType.fetchAllTodos:
      return payload;

    case actionType.createTodo:
      return [...todos, payload];

    default:
      return todos;
  }
};

export { todosReducer };
