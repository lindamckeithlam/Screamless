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
        <div className="splash-delivery">
          <div className="splash-delivery-left">
            <h2>Food delivery or pickup from local restaurants</h2>
            <p>
              Order food delivery online from restaurants near you. Browse local
              menus to find food you're craving for delivery or pickup. Read
              reviews to see what's popular in your neighborhood. Anywhere,
              anytime, order delivery to your door from places you love.
            </p>
          </div>
          <div className="splash-delivery-right">
            <img src={window.goodFoodGreatFriends} />
          </div>
        </div>

        <div className="about">
          <div className="about-left">
            <h2>About Screamless</h2>
          </div>
          <div className="about-right">
            <p>
              Screamless is simply the easiest way to order food for delivery or
              takeout. Whatever you're in the mood for, wherever you're in the
              mood for it, you've got it. No menus, no phone calls, no repeating
              yourself. Screamless is a part of the Grubhub Inc. portfolio of
              brands. For more information on Screamless, please visit
              <span> </span>
              <a href="https://screamless.herokuapp.com/#/login">
                about.screamless.com
              </a>
              .
            </p>
          </div>
        </div>

        <div className="special-offers-container">
          <div className="special-offers-left">
            <h4>Sign Up For Special Offers</h4>
            <form>
              <label>Email address</label>
              <br />
              <input
                type="email"
                placeholder="your@email.com"
                className="special-offer-input"
              />
              <br />
              <label>ZIP Code</label>
              <br />
              <input
                type="text"
                placeholder="11111"
                className="special-offer-input"
              />
              <br />
              <input
                className="count-me-in-button"
                type="submit"
                value="Count me in!"
              />
            </form>
          </div>

          <div className="special-offers-right">
            <h4>Stay Connected</h4>
            <i className="fab fa-facebook" />
            <i className="fab fa-twitter" />
            <i className="fab fa-instagram" />
            <a href="https://www.linkedin.com/in/lindamckeithlam">
              <i className="fab fa-linkedin-in" />
            </a>
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
