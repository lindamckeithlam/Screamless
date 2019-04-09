import * as UserApiUtil from "../util/user_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const ERROR = "ERROR";

export const receiveErrors = errors => ({
  type: ERROR,
  errors
});

export const receiveCurrentUser = user => {
  return { type: RECEIVE_CURRENT_USER, user };
};

export const fetchUser = id => dispatch => {
  return UserApiUtil.fetchUser(id)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(error => dispatch(receiveErrors(error.responseJSON)));
};
