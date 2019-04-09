import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-flexbox-grid";
import OrderCard from "../OrderCard";

const msp = (state, ownProps) => {
  return {
    // orders: state.currentUser.orders
  };
};

const mdp = dispatch => ({});

class BrowseByCuisine extends React.Component {
  renderOrders() {
    // const orderCards =  this.props.orders.map(order => {
    //   <Col key={order.id} xs><OrderCard order={order} /></Col>
    // });

    // return <Row>{orderCards}</Row>;
    return (
      <Row>
        <Col xs>
          <OrderCard />
        </Col>
        <Col xs>
          <OrderCard />
        </Col>
        <Col xs>
          <OrderCard />
        </Col>
        <Col xs>
          <OrderCard />
        </Col>
        <Col xs>
          <OrderCard />
        </Col>
      </Row>
    );
  }
  render() {
    // if (this.props.orders.length === 0) {
    //   return <div />;
    // }

    return (
      <Grid className="cuisine-container">
        <Row>
          <div className="modal-header-order">Your Orders</div>
        </Row>
        {this.renderOrders()}
      </Grid>
    );
  }
}

export default connect(
  msp,
  mdp
)(BrowseByCuisine);
