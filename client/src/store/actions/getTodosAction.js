import { fetchTodos } from "../../services/request";
import { actionType } from "./actionTypes";

const getTodosAction = () => async (dispatch) => {
  try {
    const { data } = await fetchTodos();
    dispatch({
      type: actionType.fetchAllTodos,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

export { getTodosAction };
