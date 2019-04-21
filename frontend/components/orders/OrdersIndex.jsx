import React from "react";
import { fetchUserOrders } from "../../actions/order_actions";
import { connect } from "react-redux";

const msp = state => {
  return {
    orders: state.currentUser.orders
  };
};

const mdp = dispatch => ({
  onFetchOrders: () => dispatch(fetchUserOrders())
});

class OrdersIndex extends React.Component {
  componentDidMount() {
    this.props.onFetchOrders();
  }

  render() {
    return <div />;
  }
}

export default connect(
  msp,
  mdp
)(OrdersIndex);
