import React from "react";
import { fetchOrder } from "../../actions/order_actions";
import { connect } from "react-redux";
import find from "lodash/find";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const msp = (state, ownProps) => {
  const orderId = Number(ownProps.match.params.order_id);

  return {
    ...ownProps,
    order: find(state.currentUser.orders, o => o.id === orderId),
    orderId: orderId || state.currentUser.orderId
  };
};

const mdp = dispatch => ({
  onFetchOrder: id => dispatch(fetchOrder(id))
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

class OrderShow extends React.Component {
  componentDidMount() {
    const { order, onFetchOrder, orderId } = this.props;
    if (!order) onFetchOrder(orderId);
  }

  render() {
    const { classes, order } = this.props;

    if (!order) return null;

    return (
      <div className="order-show-container">
        <h1>Order Details</h1>
        <Paper className={classes.root} elevation={1}>
          <div>Ordered From</div>
          <Typography variant="h5" component="h3">
            {order.restaurantName}
          </Typography>
          <Typography component="p">
            {order.items.map((item, idx) => (
              <li key={idx}>{JSON.stringify(item)}</li>
            ))}
          </Typography>
        </Paper>
      </div>
    );
  }
}

const OrderShowContainer = connect(
  msp,
  mdp
)(OrderShow);

export default withStyles(styles)(OrderShowContainer);
