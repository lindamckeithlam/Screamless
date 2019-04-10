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
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Your Account</h5>

            <p className="card-text">Name</p>

            <h6 className="card-subtitle mb-2 text-muted">
              {this.props.user.first_name}
              {"   "}
              {this.props.user.last_name}
            </h6>
            <p className="card-text">Email</p>
            <h6 className="card-subtitle mb-2 text-muted">
              {this.props.user.email}
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  msp,
  mdp
)(AccountDetails);
