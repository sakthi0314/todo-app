import { combineReducers } from "redux";
import { todosReducer } from "../reducers/todosReducer";
import { authReducer } from "../reducers/authReducer";

export const rootReducer = combineReducers({
  todosReducer,
  authReducer,
});
