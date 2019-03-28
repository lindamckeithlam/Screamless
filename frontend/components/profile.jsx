import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../actions/session_actions";
import { connect } from "react-redux";

const msp = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId]
});

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.user;
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <>
        <h1> Hello </h1>
        <div className="main-nav">
          <Link to="/lets-eat">Seamless-logo-pic Here</Link>
        </div>
        <div className="seamlesslogo-nav-container">
          <img src={window.seamlesslogo} className="seamless-nav-logo" />
        </div>
        <br />
        <button onClick={this.handleSubmit}>Log out</button>
      </>
    );
  }
}

export default connect(
  msp,
  mdp
)(Profile);
