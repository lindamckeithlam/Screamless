/* eslint-disable no-case-declarations */
import {
  RECEIVE_ITEM,
  REMOVE_ALL_ITEMS,
  REMOVE_ITEM
} from "../actions/restaurant_actions";

import {
  REORDER_ITEMS,
  RECEIVE_CURRENT_USER_DELIVERY_INSTRUCTIONS
} from "../actions/order_actions";
const initialState = {
  restaurantId: null,
  restaurantName: null,
  items: [],
  delivery_fee: 0,
  delivery_instructions: "",
  tax: 0.0875,
  tip: 0,
  total: 0,
  subtotal: 0,
  reorder: false
};

const getInitialState = () => {
  const order = localStorage.getItem("CURRENT_ORDER_STORAGE");

  return order ? JSON.parse(order) : initialState;
};

const currentOrderReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case RECEIVE_ITEM:
      const { restaurantId, restaurantName, item } = action;
      // add logic to make sure you cant add items from multiple restaurants
      // handle multiple quantities of an item
      const newState = {
        ...state,
        items: [...state.items, item],
        restaurantId,
        restaurantName,
        total: (state.total + item.price) * (1 + state.tax),
        subtotal: state.subtotal + item.price
      };

      // set current order to localstorage so it persists
      localStorage.setItem("CURRENT_ORDER_STORAGE", JSON.stringify(newState));

      return newState;

    case RECEIVE_CURRENT_USER_DELIVERY_INSTRUCTIONS:
      return { ...state, delivery_instructions: action.instruction };

    case REORDER_ITEMS:
      // add logic to make sure you cant add items from multiple restaurants
      // handle multiple quantities of an item

      const reorderState = {
        ...state,
        items: action.order.items,
        restaurantId: action.order.restaurantId,
        restaurantName: action.order.restaurantName
        // total: ,
        // subtotal: ,
        ///other stuff from order
      };

      // set current order to localstorage so it persists
      localStorage.setItem(
        "CURRENT_ORDER_STORAGE",
        JSON.stringify(reorderState)
      );

      return reorderState;
    case REMOVE_ITEM:
      const newItems = [...state.items];
      const idx = newItems.findIndex(item => item.name === action.item.name);
      const removedItem = newItems[idx];
      newItems.splice(idx, 1);

      const removedState = {
        ...state,
        items: newItems,
        total: state.total - removedItem.price,
        subtotal: state.subtotal - removedItem.price
      };

      // set current order to localstorage so it persists
      localStorage.setItem(
        "CURRENT_ORDER_STORAGE",
        JSON.stringify(removedState)
      );

      return removedState;
    case REMOVE_ALL_ITEMS:
      // clear current order localstorage
      localStorage.removeItem("CURRENT_ORDER_STORAGE");

      return initialState;
    default:
      return state;
  }
};

export default currentOrderReducer;
