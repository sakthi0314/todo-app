import { actionType } from "../actions/actionTypes";

const authToken = () => (dispatch, getState) => {
  dispatch({ type: actionType.auth, payload: getState().authReducer.token });
};

const loginAction = (creds) => async (dispatch) => {
  dispatch({ type: actionType.login, payload: creds });
};

const logoutAction = () => async (dispatch) => {
  dispatch({ type: actionType.logout });
};

export { loginAction, logoutAction, authToken };
