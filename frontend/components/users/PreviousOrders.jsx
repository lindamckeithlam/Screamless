import React from "react";
import { connect } from "react-redux";
import { fetchUserOrders } from "../../actions/order_actions.js";
import OrderCard from "../OrderCard";

const msp = state => {
  return {
    orders: state.currentUser.orders
  };
};

const mdp = dispatch => ({
  onFetchOrders: () => dispatch(fetchUserOrders())
});

class PreviousOrders extends React.Component {
  componentDidMount() {
    this.props.onFetchOrders();
  }

  renderPreviousOrders() {
    const orders = this.props.orders.map((order, i) => (
      <OrderCard order={order} className="orderCard" key={i} />
    ));
    return (
      <div className="cuisine-container-previous-orders" key="order-container">
        {orders}
      </div>
    );
  }
  render() {
    if (!this.props.orders.length) {
      return null;
    }
    return (
      <div className="previous-orders-container">
        <div className="modal-header-order">Your Orders</div>
        {this.renderPreviousOrders()}
      </div>
    );
  }
}

export default connect(
  msp,
  mdp
)(PreviousOrders);
