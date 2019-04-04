/* eslint-disable no-case-declarations */

import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_ITEM } from "../actions/restaurant_actions";
const initialState = {
  restaurantId: null,
  items: []
};

const currentOrderReducer = (state = initialState, action) => {
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
    case RECEIVE_ITEM:
      const { restaurantId, item } = action;
      // add logic to make sure you cant add iutems from multiple restaurants
      // ahndle multiple quantities of an item
      return { ...state, items: [...state.items, item], restaurantId };
    default:
      return state;
  }
};

export default currentOrderReducer;
