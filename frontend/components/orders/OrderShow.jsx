import React from "react";
import { fetchOrder, reorderItems } from "../../actions/order_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import find from "lodash/find";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "react-bootstrap/Button";
import { fetchRestaurant } from "../../actions/restaurant_actions";
import { createReview } from "../../actions/review_actions";
import Badge from "@material-ui/core/Badge";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const msp = (state, ownProps) => {
  const orderId = Number(ownProps.match.params.order_id);

  return {
    ...ownProps,
    order: find(state.currentUser.orders, o => o.id === orderId),
    orderId: orderId || state.currentUser.orderId,
    user: state.currentUser
  };
};

const mdp = dispatch => ({
  onFetchOrder: id => dispatch(fetchOrder(id)),
  onReorder: order => dispatch(reorderItems(order)),
  onPostReview: review => dispatch(createReview(review)),
  onReorder: order => dispatch(reorderItems(order))
});

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    padding: 30,
    margin: "30px auto",
    height: 1000,
    width: 800
  },
  badge: {
    width: "150px",
    top: "50%",
    backgroundColor: "#ff9100",
    border: "2px solid #ff9100",
    color: "white"
  },
  list: {
    width: 380
  },
  drawer: {
    top: "60px"
  },
  dialog: {
    width: 1000,
    height: 600,
    margin: "20px auto"
  }
});

class OrderShow extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    const { onFetchOrder, orderId, onPostReview } = this.props;
    onFetchOrder(orderId);
  }

  state = {
    expanded: false,
    showModal: false,
    body: "",
    rating: 4,
    restaurant_id: this.restaurantId
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  ratingClick(e) {
    this.setState({ rating: $("input[name='rating']:checked").val() });
  }

  onCreateReview = (restaurant_id, reviewer_id) => {
    this.props
      .onPostReview({
        body: this.state.body,
        rating: this.state.rating,
        restaurant_id: restaurant_id,
        reviewer_id: reviewer_id
      })
      .then(location.reload());
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ body: e.target.value });
  };

  renderModal = () => {
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
          Rate and Review {this.props.order.restaurantName}
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            <div className="order-rating">
              <div className="star-rating">
                <input
                  type="radio"
                  id="5-stars"
                  name="rating"
                  value="5"
                  onClick={this.ratingClick}
                  required
                  // defaultChecked
                />
                <label htmlFor="5-stars" className="star">
                  {/* <i
                    htmlFor="5-stars"
                    className="fa fa-star"
                    id="5-rating-star"
                  /> */}
                  &#9733;
                </label>

                <input
                  type="radio"
                  id="4-stars"
                  name="rating"
                  value="4"
                  onClick={this.ratingClick}
                />
                <label htmlFor="4-stars" className="star">
                  {/* <i
                    htmlFor="4-stars"
                    className="fa fa-star"
                    id="4-rating-star"
                  /> */}
                  &#9733;
                </label>

                {/* &#9733; */}

                <input
                  type="radio"
                  id="3-stars"
                  name="rating"
                  value="3"
                  onClick={this.ratingClick}
                />

                <label htmlFor="3-stars" className="star">
                  {/* <i
                    htmlFor="3-stars"
                    className="fa fa-star"
                    id="3-rating-star"
                  /> */}
                  &#9733;
                </label>

                <input
                  type="radio"
                  id="2-stars"
                  name="rating"
                  value="2"
                  onClick={this.ratingClick}
                />
                <label htmlFor="2-stars" className="star">
                  {/* <i
                    htmlFor="2-stars"
                    className="fa fa-star"
                    id="2-rating-star"
                  /> */}
                  &#9733;
                </label>

                <input
                  type="radio"
                  id="1-star"
                  name="rating"
                  value="1"
                  onClick={this.ratingClick}
                />

                <label htmlFor="1-star" className="star">
                  {/* <i
                    htmlFor="1-star"
                    className="fa fa-star"
                    id="1-rating-star"
                  /> */}
                  &#9733;
                </label>
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
            onClick={this.handleCloseModal}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            className="review-button-modal"
            onClick={() => {
              this.onCreateReview(
                this.props.order.restaurant_id,
                this.props.user.id
              );
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

  closeDrawer = () => {
    this.setState({ expanded: false });
  };

  render() {
    const { classes, order, user } = this.props;
    let subtotal = 0;
    let salestax = 0;
    let tip = 0;

    if (!order) return null;
    let date = new Date(
      new Date().getTime() + 1 * 60 * 60 * 1000
    ).toLocaleTimeString();
    let date2 = new Date(
      new Date().getTime() + 2 * 60 * 60 * 1000
    ).toLocaleTimeString();
    let currentTime = date.slice(0, date.length - 6) + date.split(" ")[1];
    let futureTime = date2.slice(0, date2.length - 6) + date2.split(" ")[1];

    return (
      <div className="order-show-details-heading">
        <h1>Order Details</h1>
        <a href="#/account/history">Back to past orders</a>
        <div className="order-show-container">
          <Paper className={classes.root} elevation={1}>
            <div className="order-show-restaurant-details">
              <div>
                <p>Ordered From</p>

                <Link
                  style={{
                    fontSize: "36px",
                    fontWeight: 500,
                    lineHeight: 1.32,
                    color: "black"
                  }}
                  to={`/menu/${order.restaurant_id}`}
                >
                  {order.restaurantName}
                </Link>

                <p>Estimated delivery</p>

                <Button
                  onClick={() =>
                    this.setState({
                      expanded: !this.state.expanded,
                      showModal: true
                    })
                  }
                  aria-label="shopping-cart"
                  className="leave-review-button"
                >
                  Leave a Review
                </Button>

                {this.renderModal()}

                <h4>{`${currentTime} - ${futureTime}`} </h4>
              </div>
              <div className="order-show-reorder">
                <Button
                  onClick={() => {
                    this.props.onReorder(order);

                    this.props.history.push(`/menu/${order.restaurantId}`);
                  }}
                  className="reorder-button"
                >
                  Reorder Now
                </Button>
              </div>
            </div>
            <div className="line" />
            <div className="order-show-container-bottom">
              <div className="order-show-left">
                <p>Ordered From</p>
                <Typography
                  className="order-show-restaurant-details"
                  variant="h5"
                  component="h1"
                >
                  {order.restaurantName}
                  <p className="phone-number">{order.formatted_phone}</p>
                  <p>{order.address}</p>

                  <div className="user-info">
                    <p>
                      Deliver ASAP to {user.first_name} {user.last_name},{" "}
                    </p>
                    <p>
                      {user.address
                        ? user.address
                        : "22 W 38th St, New York, NY"}
                    </p>
                    <p>{user.formatted_phone}</p>
                    <div className="line" />
                    <div className="user-payment">
                      <p>Payment Method Credit Card</p>

                      <h3>{`$${order.total.toFixed(2)}`}</h3>
                    </div>
                  </div>
                </Typography>
              </div>
              <div className="order-show-right">
                <div className="order-show-items">
                  <div className="order-date">
                    <p>Order date {order.order_date}</p>
                    <p>Order #31620759-4737721{order.id}</p>
                  </div>
                  <div className="line" />
                  <Typography component="p">
                    {order.items.map((item, idx) => {
                      subtotal += item.price;
                      salestax = (subtotal * 0.0875).toFixed(2);
                      tip = (subtotal * 0.15).toFixed(2);

                      return (
                        <li key={idx}>
                          <span> {item.name} </span>
                          <span>{`$ ${item.price}.00`}</span>
                        </li>
                      );
                    })}
                  </Typography>
                  <div className="line" />
                </div>
                <div className="order-show-total">
                  <li>
                    <span>Items subtotal: </span>
                    <span>{`$ ${subtotal}.00`}</span>
                  </li>
                  <li>
                    <span>Sales tax: </span>
                    <span> {`$ ${salestax}`}</span>
                  </li>

                  <li>
                    <span>Delivery Fee: </span>
                    <span className="delivery">Free</span>
                  </li>

                  <li>
                    <span>Tip: </span>
                    <span>{`$ ${tip}`}</span>
                  </li>
                  <div className="line" />
                </div>
                <div className="order-show-total">
                  <li>
                    <span>Total:</span>
                    <span>{`$ ${(subtotal * 1.27).toFixed(2)}`}</span>
                  </li>
                </div>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

const OrderShowContainer = withRouter(
  connect(
    msp,
    mdp
  )(OrderShow)
);

export default withStyles(styles)(OrderShowContainer);
