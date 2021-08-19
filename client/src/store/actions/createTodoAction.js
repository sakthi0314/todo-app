import { createTodo } from "../../services/request";
import { actionType } from "./actionTypes";

const createTodoAction = (inputs) => async (dispatch) => {
  try {
    const { data } = await createTodo(inputs);
    dispatch({
      type: actionType.createTodo,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

export { createTodoAction };
