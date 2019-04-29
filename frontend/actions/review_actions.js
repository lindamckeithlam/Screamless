export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";
import * as ReviewsApi from "../util/review_util";

export const createReview = review => dispatch =>
  ReviewsApi.createReview(review).then(review =>
    dispatch({
      type: RECEIVE_REVIEW,
      review
    })
  );
export const deleteReview = id => dispatch =>
  ReviewsApi.deleteReview(id).then(review =>
    dispatch({
      type: DELETE_REVIEW,
      review
    })
  );
