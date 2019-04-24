import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../actions/session_actions";
import { connect } from "react-redux";
import SplashSearch from "./SplashSearch";
import ProfileDropdown from "./ProfileDropdown";
import NavBarModal from "./NavBarModal";
import ShoppingBagDropdown from "./ShoppingBagDropdown";
import { withStyles } from "@material-ui/core/styles";
const msp = state => {
  return {
    user: state.currentUser
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

// const StyledButton = withStyles({
//   root: {
//     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//     borderRadius: 3,
//     border: 0,
//     color: "white",
//     height: 48,
//     padding: "0 30px",
//     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
//   },
//   label: {
//     textTransform: "capitalize"
//   }
// })(Button);

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
    let user_address;
    if (user.address) {
      user_address = (
        <span className="modal-text">{`${
          user.address.split(",")[0]
        }     `}</span>
      );
    } else {
      user_address = <span className="modal-text" />;
    }
    return (
      <div className="main-nav">
        <Link to="/lets-eat">
          <div className="seamlesslogo-nav-container">
            <img src={window.seamless20logo} className="seamless-nav-logo" />
          </div>
        </Link>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => this.setState({ showModal: !showModal })}
        >
          {/* Dymanically change the words Delivery/Pickup and Enter and Address/USER_ADDRESS with app props */}
          <div className="main-nav-deliver-to">
            <i className="fas fa-map-marker-alt" />
            <span className="modal-text"> Delivery ASAP </span>
            <span className="modal-between">to</span> {user_address}
            <i className="fas fa-angle-down" />
          </div>
        </div>
        <NavBarModal
          isShown={showModal}
          hideModal={() => this.setState({ showModal: false })}
        />
        <SplashSearch
          className="nav-search-bar"
          placeholder="Pizza, sushi, chinese"
          style={{ boxShadow: "none" }}
        />
        {/* <ul>...</ul> */}

        <i className="fa fa-bell" />
        <ProfileDropdown user={user} logout={logout} />
        <ShoppingBagDropdown />
      </div>
    );
  }
}

export default connect(
  msp,
  mdp
)(NavBar);

// export withStyles(styles)(NavBar);
