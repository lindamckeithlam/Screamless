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
      <div class="SplashHome">
        <div className="Splashy">
          <div className="Splash-Container">
            <div className="splash-img-container">
              <img src={window.splashImg} className="splashImg" />
            </div>

            <div className="seamlesslogo-container">
              <img src={window.seamless20logo2} className="seamlesslogo" />
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
                  <SplashSearch placeholder="Enter a delivery address" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="splash-bottom">
          <div className="splash-bottom1">
            <img src={window.seamlessNoodleBowl} />
            <h4>Satisfy any craving</h4>
            <p>
              Check out menus from popular local restaurants and chains. Order
              something new or tuck into your favorite go-to.
            </p>
          </div>

          <div className="splash-bottom2">
            <img src={window.seamlessShoppingBag} />
            <h4>Delivery or pickup</h4>
            <p>
              Get your favorite food delivered to your door or preorder for pick
              up. With order tracking and updates, you'll know when your food's
              ready and on the way.
            </p>
          </div>

          <div className="splash-bottom3">
            <img src={window.seamlessStackCoins} />
            <h4>Deals on meals</h4>
            <p>
              We know you crave to save as much as we do. Enjoy exclusive
              coupons, promos, and deals, and spend less on the food you love.
            </p>
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
