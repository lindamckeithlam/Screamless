export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
import * as ReviewsApi from "../util/review_util";

export const createReview = review => dispatch =>
  ReviewsApi.createReview(review).then(review =>
    dispatch({
      type: RECEIVE_REVIEW,
      review
    })
  );
