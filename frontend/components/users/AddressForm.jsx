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
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Address</h5>

          <p className="card-text">Home</p>

          <h6 className="card-subtitle mb-2 text-muted">
            {this.props.address}
          </h6>
        </div>
      </div>
    );
  }
}

export default connect(
  msp,
  mdp
)(AddressForm);
