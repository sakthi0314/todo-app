import { actionType } from "../actions/actionTypes";

const initialState = {
  auth: JSON.parse(localStorage.getItem("auth")),
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.auth:
      return {
        ...state,
      };

    case actionType.login:
      // Sending auth token to localstorage
      localStorage.setItem("auth", JSON.stringify({ ...payload }));
      return {
        ...state,
        auth: payload,
      };

    case actionType.logout:
      // clearing auth token from localstorage
      localStorage.clear();

      return {
        auth: null,
      };
    default:
      return state;
  }
};

export { authReducer };
