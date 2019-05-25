import React from "react";
import { connect } from "react-redux";
import { fetchUserOrders } from "../../actions/order_actions.js";
import { Grid, Row, Col } from "react-flexbox-grid";
import OrderCard from "../OrderCard";
import uuidv1 from "uuid/v1";
const msp = (state, ownProps) => {
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
  renderOrders() {
    const orders = this.props.orders.slice(0, 5);
    const orderCards = orders.map(order => {
      return (
        <Col key={order.id} xs>
          <OrderCard order={order} />
        </Col>
      );
    });
    do {
      orderCards.push(<Col xs key={uuidv1()} />);
    } while (orderCards.length < 4);

    return <Row start="xs">{orderCards}</Row>;
  }
  render() {
    if (this.props.orders.length === 0) {
      return <div />;
    }
    return (
      <Grid className="cuisine-container">
        <Row>
          <div className="modal-header-order">Your Orders</div>
        </Row>
        <div className="cuisine-container-previous-orders">
          {this.renderOrders()}
        </div>
      </Grid>
    );
  }
}

export default connect(
  msp,
  mdp
)(PreviousOrders);
