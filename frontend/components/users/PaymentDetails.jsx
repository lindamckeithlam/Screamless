import { fetchUser } from "../../actions/user_actions";
import React from "react";
import { connect } from "react-redux";

const msp = state => {
  return {
    user: state.currentUser
  };
};

const mdp = dispatch => ({
  onFetchCurrentUser: id => dispatch(fetchUser(id))
});

class PaymentDetails extends React.Component {
  render() {
    return (
      <div className="account-details">
        <p>Your Account</p>

        <label>Saved Card</label>
        <p>VISA••••5860, exp 11 / 22</p>
      </div>
    );
  }
}

export default connect(
  msp,
  mdp
)(PaymentDetails);
