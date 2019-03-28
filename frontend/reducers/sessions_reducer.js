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
      const currentSession = action.user;
      return Object.assign({}, { id });
    case LOGOUT_CURRENT_USER:
      return state;
  }
  return state;
};

export default sessionsReducer;
