import {
  RECEIVE_ONE_RESTAURANT,
  RECEIVE_RESTAURANTS
} from "../actions/restaurant_actions";

import { RECEIVE_REVIEW, DELETE_REVIEW } from "../actions/review_actions";
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
    case RECEIVE_REVIEW: {
      // Object.freeze(state);
      const state2 = { ...state };
      state2.currentRestaurant.reviews[action.review.id] = action.review;
      return state2;
    }
    case DELETE_REVIEW: {
      const newState = { ...state };
      delete newState.currentRestaurant.reviews[action.review.id];
      return newState;
    }
    default:
      return state;
  }
};

export default restaurantReducer;
