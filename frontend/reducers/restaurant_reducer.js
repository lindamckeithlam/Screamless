import {
  RECEIVE_ONE_RESTAURANT,
  RECEIVE_RESTAURANTS
} from "../actions/restaurant_actions";

const initialState = {
  restaurants: [],
  currentRestaurant: {}
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ONE_RESTAURANT:
      return { ...state, currentRestaurant: action.currentRestaurant };
    case RECEIVE_RESTAURANTS:
      return { ...state, restaurants: action.restaurants };
    default:
      return state;
  }
};

export default restaurantReducer;
