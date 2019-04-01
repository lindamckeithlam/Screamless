import React from "react";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ToggleButton from "react-bootstrap/ToggleButton";
import { logout } from "../actions/session_actions";
import { connect } from "react-redux";
import SplashSearch from "./SplashSearch";

const msp = state => {
  return {
    user: state.currentUser
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

class NavBarModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orderType: "Delivery"
    };
  }
  render() {
    const { isShown, hideModal } = this.props;
    const { orderType } = this.state;

    if (!isShown) return <div />;
    const buttonClass = "toggle-button-modal";
    return (
      <div className="modal-container" onClick={hideModal}>
        <div className="modal-main" onClick={e => e.stopPropagation()}>
          <div className="modal-header-order">Your Order Settings</div>
          <div className="btn-group-toggle" data-toggle="buttons">
            <ButtonToolbar>
              <ToggleButtonGroup
                className="toggle-button-group"
                type="radio"
                name="options"
                defaultValue={"Delivery"}
              >
                <ToggleButton
                  className={
                    orderType === "Delivery"
                      ? buttonClass + "-selected"
                      : buttonClass
                  }
                  onClick={() => this.setState({ orderType: "Delivery" })}
                >
                  Delivery
                </ToggleButton>
                <ToggleButton
                  className={
                    orderType === "Pickup"
                      ? buttonClass + "-selected"
                      : buttonClass
                  }
                  onClick={() => this.setState({ orderType: "Pickup" })}
                  value={"Pickup"}
                >
                  Pickup
                </ToggleButton>
              </ToggleButtonGroup>
            </ButtonToolbar>
          </div>

          <div className="modal-address">{`${orderType} Address`}</div>
          <SplashSearch placeholder="Enter your address" />
        </div>
      </div>
    );
  }
}

export default connect(
  msp,
  mdp
)(NavBarModal);
