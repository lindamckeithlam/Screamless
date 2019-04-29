import React from "react";
import { deleteReview } from "../../actions/review_actions";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { withStyles } from "@material-ui/core/styles";

const msp = state => {
  return {
    user: state.currentUser
  };
};
const mdp = dispatch => ({
  onDeleteReview: id => dispatch(deleteReview(id))
});

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    padding: 30,
    margin: "30px auto",
    height: 1000,
    width: 800
  }
});
class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteReview(reviewId) {
    this.props.onDeleteReview(reviewId);
  }

  style(review) {
    if (this.props.user.id === review.reviewer_id) {
      return {};
    } else {
      return {
        visibility: "hidden"
      };
    }
  }

  render() {
    // let reviewsArray = Object.values(this.props.reviews).sort(
    //   (a, b) => b.timestamp - a.timestamp
    // );
    let reviewsArray = Object.values(this.props.reviews).reverse();

    return (
      <div>
        {reviewsArray.map(review => {
          return (
            <div className="review-container" key={review.id}>
              <div className="review-top">
                <div className="review-name">
                  <span>
                    <p className="avatar">{review.first_name.charAt(0)}</p>
                    <h6> {review.first_name} </h6>
                  </span>
                </div>
                <div className="star-ratings-css">
                  <div
                    className="star-ratings-css-top"
                    style={{ width: `${(review.rating / 5) * 100}%` }}
                  >
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <div className="star-ratings-css-bottom">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
              </div>
              <div className="review-body">{review.body}</div>
              <Button
                style={this.style(review)}
                className="delete-button"
                onClick={() => this.deleteReview(review.id)}
              >
                Delete Review
              </Button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withStyles(styles)(
  connect(
    msp,
    mdp
  )(Reviews)
);
