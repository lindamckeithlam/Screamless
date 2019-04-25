import { RECEIVE_REVIEW } from "../actions/review_actions";

const reviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REVIEW:
      return action.review;

    default:
      return state;
  }
};

export default reviewsReducer;
