import React from "react";
import { connect } from "react-redux";

class Delivery extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
  }
  render() {
    return (
      <div className="delivery-container">
        Your order settings
        <div className="order-question">When would you like your order?</div>
        <div className="order-question">Delivery Address</div>
      </div>
    );
  }
}

const msp = state => ({
  user: {
    address: ""
  }
});

const mdp = dispatch => ({});

export default connect(
  msp,
  mdp
)(Delivery);
