import {
  CLEAR_ALL_FILTERS,
  FILTER_RATING,
  FILTER_CUISINE,
  FILTER_PRICE,
  FILTER_DISTANCE,
  FILTER_OPEN
} from "../actions/filter_actions";

const initialState = {
  rating: null,
  distance: null,
  cuisine: null,
  openNow: false
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ALL_FILTERS:
      return initialState;
    case FILTER_CUISINE:
      return { ...state, cuisine: action.cuisine };
    case FILTER_DISTANCE:
      return { ...state, distance: action.distance };
    case FILTER_RATING:
      return { ...state, rating: action.rating };
    case FILTER_OPEN:
      return { ...state, openNow: action.openNow };
    case FILTER_PRICE:
      return { ...state, price: action.price };
    default:
      return state;
  }
};

export default filterReducer;
