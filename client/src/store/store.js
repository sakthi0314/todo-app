import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers/rootReducers";

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), composeWithDevTools())
);
