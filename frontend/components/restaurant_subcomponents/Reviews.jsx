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
      rating: null,
      restaurant_id: this.props.restaurant.id,
      reviewer_id: this.props.user.id,
      check: "5",
      color1: "grey",
      color2: "grey",
      color3: "grey",
      color4: "grey",
      color5: "grey"
    };
  }

  starStyle5 = e => {
    e.preventDefault();
    this.setState({
      color1: "orange",
      color2: "orange",
      color3: "orange",
      color4: "orange",
      color5: "orange",
      rating: Number(e.target.value)
    });
  };
  starStyle4 = e => {
    e.preventDefault();
    this.setState({
      color1: "orange",
      color2: "orange",
      color3: "orange",
      color4: "orange",
      color5: "grey",
      rating: Number(e.target.value)
    });
  };
  starStyle3 = e => {
    e.preventDefault();
    this.setState({
      color1: "orange",
      color2: "orange",
      color3: "orange",
      color4: "grey",
      color5: "grey",
      rating: Number(e.target.value)
    });
  };
  starStyle2 = e => {
    e.preventDefault();

    this.setState({
      color1: "orange",
      color2: "orange",
      color3: "grey",
      color4: "grey",
      color5: "grey",
      rating: Number(e.target.value)
    });
  };

  starStyle1 = e => {
    e.preventDefault();
    this.setState({
      color1: "orange",
      color2: "grey",
      color3: "grey",
      color4: "grey",
      color5: "grey",
      rating: Number(e.target.value)
    });
  };

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
            <span className="rating">
              <input
                type="radio"
                className="rating-input"
                id="rating-input-1-5"
                name="rating-input-1"
                checked={this.state.check === "5"}
                value="5"
                onClick={this.starStyle5}
              />
              <label
                htmlFor="rating-input-1-5"
                className="rating-star"
                style={{ color: this.state.color5 }}
              >
                &#9733;
              </label>

              <input
                type="radio"
                className="rating-input"
                id="rating-input-1-4"
                name="rating-input-1"
                checked={this.state.check === "4"}
                value="4"
                onClick={this.starStyle4}
              />
              <label
                htmlFor="rating-input-1-4"
                className="rating-star"
                style={{ color: this.state.color4 }}
              >
                &#9733;
              </label>
              <input
                type="radio"
                className="rating-input"
                id="rating-input-1-3"
                name="rating-input-1"
                checked={this.state.check === "3"}
                value="3"
                onClick={this.starStyle3}
              />
              <label
                htmlFor="rating-input-1-3"
                className="rating-star"
                style={{ color: this.state.color3 }}
              >
                &#9733;
              </label>
              <input
                type="radio"
                className="rating-input"
                id="rating-input-1-2"
                name="rating-input-1"
                checked={this.state.check === "2"}
                value="2"
                onClick={this.starStyle2}
              />
              <label
                htmlFor="rating-input-1-2"
                className="rating-star"
                style={{ color: this.state.color2 }}
              >
                &#9733;
              </label>
              <input
                type="radio"
                className="rating-input"
                id="rating-input-1-1"
                name="rating-input-1"
                checked={this.state.check === "1"}
                value="1"
                onClick={this.starStyle1}
              />
              <label
                htmlFor="rating-input-1-1"
                className="rating-star"
                style={{ color: this.state.color1 }}
              >
                &#9733;
              </label>
            </span>
            <p>{this.state.rating}</p>
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
                    {/* <p>{review.rating}</p> */}
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
                      rating: this.state.rating
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
