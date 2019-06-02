import React from "react";
import SplashSearch from "./SplashSearch";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "./footer";
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
      <div className="SplashHome">
        <div className="Splashy">
          <div className="Splash-Container">
            <div className="splash-img-container">
              <img src={window.splashImg} className="splashImg" />
            </div>

            <div className="seamlesslogo-container">
              <img
                src="https://s3.us-east-2.amazonaws.com/screamless-seed/screamless-logo.png"
                className="seamlesslogo"
              />
            </div>
          </div>

          <div className="splash-texts">
            <div className="splash-links-container">
              <Link className="splash-links" to="/create-account">
                Create an account
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
                  <SplashSearch placeholder="Pizza, sushi, chinese" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="splash-bottom">
          <div className="splash-bottom1">
            <img
              src={
                "https://s3.us-east-2.amazonaws.com/screamless-seed/noodlebowl.svg"
              }
            />
            <h4>Satisfy any craving</h4>
            <p>
              Check out menus from popular local restaurants and chains. Order
              something new or tuck into your favorite go-to.
            </p>
          </div>

          <div className="splash-bottom2">
            <img
              src={
                "https://s3.us-east-2.amazonaws.com/screamless-seed/seamlessbag.svg"
              }
            />
            <h4>Delivery or pickup</h4>
            <p>
              Get your favorite food delivered to your door or preorder for pick
              up. With order tracking and updates, you'll know when your food's
              ready and on the way.
            </p>
          </div>

          <div className="splash-bottom3">
            <img
              src={
                "https://s3.us-east-2.amazonaws.com/screamless-seed/stackedcoins.svg"
              }
            />
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
            <img src="https://res.cloudinary.com/grubhub/image/upload/w_600,h_300,f_auto,g_auto,q_auto,dpr_auto,c_fill/topics_umami_homepage/assets_free_delivery.jpg" />
          </div>
        </div>

        <div className="about">
          <div className="about-left">
            <h2>About Screamless</h2>
          </div>
          <div className="about-right">
            <p>
              Screamless is a cover of Seamless.com, an online food ordering and
              delivery platform. It was built using Ruby on Rails for the back
              end, and React/Redux for the front end. For more information on
              Screamless, or any related inquiries, please visit <span> </span>
              <a
                href="https://github.com/lindamckeithlam/Screamless"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/lindamckeithlam
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

              <a href="mailto:lam.lindamckeith@gmail.com">
                <input
                  className="count-me-in-button"
                  type="submit"
                  value="Count me in!"
                />
              </a>
            </form>
          </div>

          <div className="special-offers-right">
            <h4>Stay Connected</h4>

            <a
              href="https://angel.co/linda-mckeith-lam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-angellist" />
            </a>
            <a
              href="https://www.linkedin.com/in/lindamckeithlam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="https://github.com/lindamckeithlam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(
  msp,
  null
)(Splash);
