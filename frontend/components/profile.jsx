import React from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";

const msp = (state, ownProps) => {
  return {};
};

const mdp = dispatch => ({});

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
