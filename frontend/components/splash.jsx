import React from "react";
import SplashSearch from "./SplashSearch";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const msp = state => ({
  user: {
    address: ""
  }
});

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
  }

  handleChange(address) {
    return e => {
      e.preventDefault();
      this.setState({ [address]: e.target.value });
    };
  }

  render() {
    return (
      <div className="Splashy">
        <div className="Splash-Container">
          <div className="splash-img-container">
            <img src={window.splashImg} className="splashImg" />
          </div>

          <div className="seamlesslogo-container">
            <img src={window.seamlesslogo} className="seamlesslogo" />
          </div>
        </div>

        <div className="splash-texts">
          <div className="splash-links-container">
            <Link className="splash-links" to="/create-account">
              Get the app
            </Link>
            <Link className="splash-links" to="/login">
              Sign in
            </Link>
          </div>
          <div className="splash-text-container">
            <div className="splash-content">
              <div className="splash-header-container">
                <h1 className="splash-header">Order food you love,</h1>
                <h1 className="splash-header">delivered</h1>
              </div>
              <form>
                <SplashSearch />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  msp,
  null
)(Splash);
