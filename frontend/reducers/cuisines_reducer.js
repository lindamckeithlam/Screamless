import {
  RECEIVE_CUISINES,
  RECEIVE_CUISINE
} from "../actions/restaurant_actions";

const initialState = {
  cuisines: [],
  cuisine: {}
};

const cuisineReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CUISINE:
      return { ...state, cuisine: action.cuisine };
    case RECEIVE_CUISINES:
      return { ...state, cuisines: action.cuisines };
    default:
      return state;
  }
};

export default cuisineReducer;
