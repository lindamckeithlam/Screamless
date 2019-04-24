import React from "react";
import { fetchOrder, reorderItems } from "../../actions/order_actions";
import { connect } from "react-redux";
import find from "lodash/find";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { fetchRestaurant } from "../../actions/restaurant_actions";

const msp = (state, ownProps) => {
  const orderId = Number(ownProps.match.params.order_id);
  // state.orders[ownProps.match.params.order_id]

  return {
    ...ownProps,
    order: find(state.currentUser.orders, o => o.id === orderId),
    orderId: orderId || state.currentUser.orderId,
    user: state.currentUser
  };
};

const mdp = dispatch => ({
  onFetchOrder: id => dispatch(fetchOrder(id)),
  onReorder: order => dispatch(reorderItems(order))
});

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    padding: 30,
    margin: "30px auto",
    height: 1000,
    width: 800,
    display: "flex"
  }
});

class OrderShow extends React.Component {
  componentDidMount() {
    const { onFetchOrder, orderId } = this.props;
    onFetchOrder(orderId);
  }

  render() {
    const { classes, order, user } = this.props;
    let subtotal = 0;
    let salestax = 0;
    let tip = 0;

    if (!order) return null;

    return (
      <div className="order-show-details-heading">
        <h1>Order Details</h1>
        <a href="#/account/history">Back to past orders</a>
        <div className="order-show-container">
          <Paper className={classes.root} elevation={1}>
            <div className="order-show-left">
              <p>Ordered From</p>
              <Typography
                className="order-show-restaurant-details"
                variant="h5"
                component="h1"
              >
                <h1>{order.restaurantName}</h1>
                <p>{order.address}</p>

                <p>
                  <div className="phone-number">{order.formatted_phone}</div>
                </p>

                <div className="user-info">
                  <p>Deliver ASAP to {user.first_name}</p>
                  <p>{user.address}</p>
                  <p>{user.formatted_phone}</p>
                  <div className="line" />
                  <div className="user-payment">
                    <p>Payment Method Credit Card</p>
                    {/* <p>Credit Card</p> */}
                    <h3>{`$${order.total.toFixed(2)}`}</h3>
                  </div>
                </div>
              </Typography>
            </div>
            <div className="order-show-right">
              <div className="order-show-items">
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
                  <p>Items subtotal: </p>
                  <p> {`$ ${subtotal}.00`}</p>
                </li>
                <li>
                  <p>Sales tax: </p>
                  <p> {`$ ${salestax}`}</p>
                </li>
                <li>
                  <p>Tip: </p>
                  <p> {`$ ${tip}`}</p>
                </li>
                <div className="line" />
              </div>
              <div className="order-show-total">
                <li>
                  <p>Total:</p>
                  <p> {`$ ${order.total.toFixed(2)}`}</p>
                </li>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

const OrderShowContainer = connect(
  msp,
  mdp
)(OrderShow);

export default withStyles(styles)(OrderShowContainer);
