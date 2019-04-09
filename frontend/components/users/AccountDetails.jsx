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

class AccountDetails extends React.Component {
  render() {
    return (
      <div className="account-details">
        <p>Your Account</p>

        <label>Name</label>
        <p>{this.props.user.first_name}</p>
        <p>{this.props.user.last_name}</p>
        <label>Email</label>
        <p>{this.props.user.email}</p>
      </div>
    );
  }
}

export default connect(
  msp,
  mdp
)(AccountDetails);
