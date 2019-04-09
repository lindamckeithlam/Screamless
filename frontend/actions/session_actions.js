import * as SessionApiUtil from "../util/session_api_util";
import * as UserApiUtil from "../util/user_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_CURRENT_USER_ADDRESS = "RECEIVE_CURRENT_USER_ADDRESS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const ERROR = "ERROR";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveErrors = errors => ({
  type: ERROR,
  errors
});

export const receiveCurrentUser = user => {
  return { type: RECEIVE_CURRENT_USER, user };
};

export const receiveCurrentUserAddress = address => {
  return { type: RECEIVE_CURRENT_USER_ADDRESS, address };
};

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

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

export const saveCurrentUserAddress = (id, address) => dispatch => {
  return UserApiUtil.saveAddress(id, address)
    .then(() => dispatch(receiveCurrentUserAddress(address)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)));
};
