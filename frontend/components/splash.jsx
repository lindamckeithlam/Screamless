import React from "react";
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
          <h1>Order food you love, delivered</h1>
          <br />
          <Link to="/sessions/new">Sign in</Link>
          <br />
          <Link to="/users/new">Get the app</Link>
          <br />
          <form>
            <label>Enter a Delivery Address:</label>
            <input
              type="text"
              value={this.state.address}
              onChange={this.handleChange("address")}
            />
            <button>></button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  msp,
  null
)(Splash);
