import { deleteTodo } from "../../services/request";
import { actionType } from "./actionTypes";

const deteleTodoAction = (id) => async (dispatch) => {
  try {
    await deleteTodo(id);
    console.log("HElloo");
    dispatch({
      type: actionType.deteleTodo,
    });
  } catch (error) {
    console.error(error.message);
  }
};

export default deteleTodoAction;
