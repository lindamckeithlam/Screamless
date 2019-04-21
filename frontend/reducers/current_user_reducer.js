/* eslint-disable no-case-declarations */

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_CURRENT_USER_ADDRESS
} from "../actions/session_actions";

import {
  RECEIVE_ONE_ORDER,
  RECEIVE_PREVIOUS_ORDERS
} from "../actions/order_actions";

export const initialState = {
  id: null,
  email: null,
  last_name: null,
  first_name: null,
  orders: [],
  orderId: null,
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
    case RECEIVE_ONE_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.order],
        orderId: action.order.id
      };
    case RECEIVE_PREVIOUS_ORDERS:
      return {
        ...state,
        orders: action.orders
      };
    default:
      return state;
  }
};

export default currentUserReducer;
