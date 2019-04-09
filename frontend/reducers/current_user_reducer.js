/* eslint-disable no-case-declarations */

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_CURRENT_USER_ADDRESS
} from "../actions/session_actions";

const initialState = {
  id: null,
  email: null,
  last_name: null,
  first_name: null,
  orders: [],
  address: null
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const { id, email, last_name, first_name, address } = action.user;
      return {
        ...state,
        id,
        email,
        last_name,
        first_name,
        address
      };
    case RECEIVE_CURRENT_USER_ADDRESS:
      return { ...state, address: action.address };
    default:
      return state;
  }
};

export default currentUserReducer;
