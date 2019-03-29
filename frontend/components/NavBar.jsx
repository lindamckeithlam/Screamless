import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../actions/session_actions";
import { connect } from "react-redux";
import SplashSearch from "./SplashSearch";
import ProfileDropdown from "./ProfileDropdown";
import NavBarModal from "./NavBarModal";

const msp = (state, ownProps) => {
  return {
    user: state.currentUser
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }
  render() {
    const { user, logout } = this.props;
    const { showModal } = this.state;
    return (
      <div className="main-nav">
        <Link to="/lets-eat">
          <div className="seamlesslogo-nav-container">
            <img src={window.seamless20logo} className="seamless-nav-logo" />
          </div>
        </Link>
        <div onClick={() => this.setState({ showModal: !showModal })}>
          {/* Dymanically change the words Delivery/Pickup and Enter and Address/USER_ADDRESS with app props */}
          Delivery ASAP to Enter an Address
        </div>
        <NavBarModal
          isShown={showModal}
          hideModal={() => this.setState({ showModal: false })}
        />
        <SplashSearch placeholder="Pizza, sushi, chinese" />
        {/* <ul>...</ul> */}

        <i className="fa fa-bell" />
        <ProfileDropdown user={user} logout={logout} />
        <i className="fas fa-shopping-bag" />
      </div>
    );
  }
}

export default connect(
  msp,
  mdp
)(NavBar);
