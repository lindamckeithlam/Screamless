/* eslint-disable no-case-declarations */
import {
  RECEIVE_ITEM,
  REMOVE_ALL_ITEMS,
  REMOVE_ITEM
} from "../actions/restaurant_actions";
const initialState = {
  restaurantId: null,
  restaurantName: null,
  items: [],
  delivery_fee: 0,
  delivery_instructions: "",
  tax: 0,
  tip: 0,
  total: 0,
  subtotal: 0
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
        total: state.total + item.price,
        subtotal: state.subtotal + item.price
      };

      // set current order to localstorage so it persists
      localStorage.setItem("CURRENT_ORDER_STORAGE", JSON.stringify(newState));

      return newState;
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
