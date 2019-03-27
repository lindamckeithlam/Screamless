/* eslint-disable no-case-declarations */

import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      debugger;
      const state2 = { ...state, [action.user.id]: action.user };
      return state2;
    default:
      return state;
  }
};

export default usersReducer;
