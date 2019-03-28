import React from "react";
import { connect } from "react-redux";

class Pickup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        address: ""
      }
    };
  }
  render() {
    return (
      <div className="Pickup-container">
        Your order settings
        <div className="order-question">When would you like your order?</div>
        <div className="order-question">Pickup Address</div>
      </div>
    );
  }
}

const mdp = dispatch => ({});

export default connect(
  null,
  mdp
)(Pickup);
