import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../actions/session_actions";
import { connect } from "react-redux";
import SplashSearch from "./SplashSearch";
import ProfileDropdown from "./ProfileDropdown";
import NavBar from "./NavBar";

const msp = (state, ownProps) => {
  return {
    user: state.currentUser
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

class Profile extends React.Component {
  render() {
    return (
      <div className="profile-container">
        <NavBar />
      </div>
    );
  }
}

export default connect(
  msp,
  mdp
)(Profile);
