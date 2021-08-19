import { updateTodo } from "../../services/request";
import { actionType } from "./actionTypes";

const updateTodoAction = (id, updatedTodo) => async (dispatch) => {
  try {
    const { data } = await updateTodo(id, updatedTodo);

    dispatch({
      type: actionType.updateTodo,
      paylaod: data,
    });
  } catch (error) {
    console.error(error.message);
  }
};

export { updateTodoAction };
