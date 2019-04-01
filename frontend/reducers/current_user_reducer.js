/* eslint-disable no-case-declarations */

import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
const initialState = {
  id: null,
  email: null,
  last_name: null,
  first_name: null,
  orders: [],
  currentOrder: []
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const { id, email, last_name, first_name } = action.user;
      // return { ...state, [action.user.id]: action.user };
      return Object.assign({}, state, {
        ...state,
        id,
        email,
        last_name,
        first_name
      });
    // case RECEIVE_CURRENT_USER_ORDERS:
    // const { id, email, last_name, first_name } = action.user;
    // // return { ...state, [action.user.id]: action.user };
    // return Object.assign({}, state, {
    //   ...state,
    //   id,
    //   email,
    //   last_name,
    //   first_name
    // });
    default:
      return state;
  }
};

export default currentUserReducer;
