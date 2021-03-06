import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../actions/session_actions";

const initialState = {
  id: null
};

const sessionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // eslint-disable-next-line no-case-declarations

      // return Object.assign({}, state, { id: action.user.id });
      return { ...state, id: action.user.id };
    case LOGOUT_CURRENT_USER:
      // return Object.assign({}, state, { id: null });
      return { ...state, id: null };
  }
  return state;
};

export default sessionsReducer;
