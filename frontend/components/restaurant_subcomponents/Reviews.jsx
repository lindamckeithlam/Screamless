import React from "react";
import { deleteReview, editReview } from "../../actions/review_actions";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const msp = state => {
  return {
    user: state.currentUser
  };
};
const mdp = dispatch => ({
  onDeleteReview: id => dispatch(deleteReview(id)),
  onEditReview: review => dispatch(editReview(review))
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
    this.state = {
      expanded: false,
      showModal: false,
      body: "",
      rating: 4,
      restaurant_id: this.props.restaurant.id,
      reviewer_id: this.props.user.id
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ body: e.target.value });
  };

  renderModal = review => {
    const { classes } = this.props;
    return (
      <Dialog
        className={classes.dialog}
        open={this.state.showModal}
        onClose={this.handleCloseModal}
        aria-labelledby="form-dialog-title"
      >
        <i className="fa fa-close" onClick={this.handleCloseModal} />

        <DialogTitle id="form-dialog-title">
          Rate and Review {this.props.restaurant.name}
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            <div className="order-rating">
              <div
                className="order-rating-top"
                // style={{ width: `${this.state.rating / 5 / 100}%` }}
              >
                <span id="1" onClick={() => this.setState({ rating: 5 })}>
                  ☆
                </span>
                <span id="2" onClick={() => this.setState({ rating: 4 })}>
                  ☆
                </span>
                <span id="3" onClick={() => this.setState({ rating: 3 })}>
                  ☆
                </span>
                <span id="4" onClick={() => this.setState({ rating: 2 })}>
                  ☆
                </span>
                <span id="5" onClick={() => this.setState({ rating: 1 })}>
                  ☆
                </span>
              </div>
            </div>
            {/* Review address, payments, and tip to complete your purchase */}
          </DialogContentText>
          <div className="review-modal">
            <label>Write a Review</label>
            <textarea
              wrap="hard"
              type="text"
              value={this.state.body}
              onChange={this.handleChange}
              placeholder="Writing a review gets you one step closer to earning Top Reviewer status. 
              Tell us what you loved about this order"
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            className="review-button-modal"
            onClick={() => {
              this.editReview(review);
              this.handleCloseModal();
            }}
            color="primary"
          >
            Submit your Rating & Review
          </Button>
        </DialogActions>
        <DialogContent />
      </Dialog>
    );
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, alert: null });
  };

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  editReview(reviewObj) {
    let review = {
      id: reviewObj.id,
      restaurant_id: this.state.restaurant_id,
      reviewer_id: this.state.reviewer_id,
      body: this.state.body,
      rating: this.state.rating
    };

    this.props.onEditReview(review).then(location.reload());
  }

  deleteReview(reviewId) {
    this.props.onDeleteReview(reviewId).then(location.reload());
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
    let reviewsArray = Object.values(this.props.reviews);

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
              <div className="review-actions">
                {" "}
                <Button
                  style={this.style(review)}
                  className="delete-button"
                  onClick={() => this.deleteReview(review.id)}
                >
                  Delete Review
                </Button>
                <Button
                  style={this.style(review)}
                  className="delete-button"
                  onClick={() =>
                    this.setState({
                      expanded: !this.state.expanded,
                      showModal: true,
                      body: review.body,
                      rating: review.rating
                    })
                  }
                >
                  Edit Review
                </Button>
                {this.renderModal(review)}
              </div>
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
