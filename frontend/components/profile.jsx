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
      <div className="main-nav">
        <Link to="/lets-eat" />
        <div className="seamlesslogo-nav-container">
          <img src={window.seamless20logo} className="seamless-nav-logo" />
        </div>
        <input
          type="text"
          className="search-bar"
          placeholder="Pizza, sushi, chinese"
        />
        {/* <ul>...</ul> */}

        <i className="fa fa-bell" />
        <i className="fas fa-shopping-bag" />
        <button onClick={this.handleSubmit}>Log out</button>
      </div>
    );
  }
}

export default connect(
  msp,
  mdp
)(Profile);
