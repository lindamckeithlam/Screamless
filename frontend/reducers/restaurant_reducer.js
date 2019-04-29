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
    // case RECEIVE_REVIEW:
    //   const newReviews = [...state.currentRestaurant.reviews, action.review];

    //   return {
    //     ...state,
    //     currentRestaurant: {
    //       ...state.currentRestaurant,
    //       reviews: newReviews
    //     }
    //   };

    default:
      return state;
  }
};

export default restaurantReducer;
