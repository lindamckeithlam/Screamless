import { fetchUser } from "../../actions/user_actions";
import React from "react";
import { connect } from "react-redux";

const msp = state => {
  return {
    user: state.currentUser,
    address: state.currentUser.address
  };
};

const mdp = dispatch => ({
  onFetchCurrentUser: id => dispatch(fetchUser(id))
});

class AddressForm extends React.Component {
  render() {
    return (
      <div className="address">
        <p>Home</p>
        <p>{this.props.address}</p>
      </div>
    );
  }
}

export default connect(
  msp,
  mdp
)(AddressForm);
