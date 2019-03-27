import * as SessionApiUtil from "../util/session_api_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const ERROR = "ERROR";

export const receiveErrors = errors => ({
  type: ERROR,
  errors
});

export const receiveCurrentUser = user => {
  return { type: RECEIVE_CURRENT_USER, user };
};

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const logout = () => dispatch =>
  SessionApiUtil.logout()
    .then(() => dispatch({ type: LOGOUT_CURRENT_USER }))
    .fail(error => dispatch(receiveErrors(error.responseJSON)));

export const login = user => dispatch => {
  return SessionApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(error => dispatch(receiveErrors(error.responseJSON)));
};

export const signup = user => dispatch => {
  return SessionApiUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)));
};
