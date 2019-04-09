import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { Link } from "react-router-dom";
class ProfileDropdown extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    this.props.logout();
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { user } = this.props;
    const open = Boolean(anchorEl);

    return (
      <div>
        <Button
          aria-owns={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {`Hi, ${user && user.first_name}!`}
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={this.handleClose}>
            <Link to="/account/profile" className="clickable">
              Profile{" "}
            </Link>
          </MenuItem>

          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.handleLogout}>{`Not ${user &&
            user.first_name}? Logout`}</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default ProfileDropdown;
