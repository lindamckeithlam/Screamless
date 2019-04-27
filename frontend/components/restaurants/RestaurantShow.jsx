import React from "react";
import { Link } from "react-router-dom";

import { Grid, Row, Col } from "react-flexbox-grid";
import Sticky from "react-stickynode";
import * as Scroll from "react-scroll";

import NavBar from "../NavBar";
import {
  fetchRestaurant,
  fetchRestaurants
} from "../../actions/restaurant_actions";
import { connect } from "react-redux";

import InitMap from "../GoogleMap";

import Footer from "../footer";
import Reviews from "../restaurant_subcomponents/Reviews";
import MenuItems from "../restaurant_subcomponents/MenuItems";
const msp = state => {
  return {
    currentRestaurant: state.restaurants.currentRestaurant
  };
};

const mdp = dispatch => ({
  onFetchRestaurants: () => dispatch(fetchRestaurants()),
  onFetchRestaurant: id => dispatch(fetchRestaurant(id))
});

class RestaurantShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props
      .onFetchRestaurants()
      .then(
        this.props.onFetchRestaurant(this.props.match.params.restaurant_id)
      );
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.restaurant_id !=
      this.props.match.params.restaurant_id
    ) {
      this.props.onFetchRestaurant(this.props.match.params.restaurant_id);
    }
  }
  render() {
    let reviews = <div />;
    let count = <p>{count}</p>;
    let menu = <div />;

    if (this.props.currentRestaurant.reviews) {
      reviews = <Reviews reviews={this.props.currentRestaurant.reviews} />;
      count = Object.values(this.props.currentRestaurant.reviews).length;
    }

    if (this.props.currentRestaurant.menu_items) {
      menu = (
        <MenuItems
          restaurantId={this.props.currentRestaurant.id}
          restaurantName={this.props.currentRestaurant.name}
          menuItems={this.props.currentRestaurant.menu_items}
        />
      );
    }

    return (
      <div className="restaurant-showpage-container">
        <NavBar />
        <div id="restaurant-banner" className="restaurant-banner">
          <div className="restaurant-banner-img">
            <img src={this.props.currentRestaurant.img_url} />
          </div>
          <div className="restaurant-info">
            <h1>{this.props.currentRestaurant.name}</h1>
            <span>
              {this.props.currentRestaurant.address}
              {"                 "}
              <i className="fas fa-phone" />
              {"      "}
              {this.props.currentRestaurant.formatted_phone}
            </span>
          </div>
        </div>
        <Sticky innerZ={1000} top="#main-nav">
          <div className="restaurant-links">
            <Scroll.Link smooth duration={500} offset={-125} to="menu-section">
              <span className="green-text">Menu</span>
            </Scroll.Link>
            <Scroll.Link
              smooth
              duration={1000}
              offset={-130}
              to="about-section"
            >
              <span className="green-text">About</span>
            </Scroll.Link>
            <Scroll.Link
              className="green-text"
              smooth
              duration={1000}
              offset={-120}
              to="review-section"
            >
              <span className="green-text">Review</span>
            </Scroll.Link>
          </div>
        </Sticky>
        <div name="menu-section" className="restaurant-line" />
        {menu}
        <Grid fluid className="restaurant-bottom">
          <Row name="about-section">
            <h3 id="about">About {this.props.currentRestaurant.name}</h3>
          </Row>
          <Row>{/* <div>Restaruant description blah lbah</div> */}</Row>
          <Row>
            <div>$$$</div>
          </Row>
          <Row>
            <Col xs>
              <Row>
                <InitMap address={this.props.currentRestaurant.address} />
              </Row>
              <Row>
                <p>{this.props.currentRestaurant.address}</p>
                <div className="restaurant-line" />
              </Row>
              <Row>
                <p>
                  <i className="fas fa-phone" />
                  {"      "}
                  {this.props.currentRestaurant.formatted_phone}
                </p>
                <div className="restaurant-line" />
              </Row>
            </Col>
            <Col xs>
              <Row>
                <h3>Hours</h3>
              </Row>
              <Row>
                <Col xs>Today</Col>
                <Col xs>
                  {`${this.props.currentRestaurant.open_time}:00am - ${this
                    .props.currentRestaurant.close_time - 12}:00pm`}
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <div name="review-section" className="restaurant-reviews-main">
              <h3>Reviews for {this.props.currentRestaurant.name}</h3>

              <span>{count} ratings</span>
            </div>
          </Row>
          <Row>{reviews}</Row>
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default connect(
  msp,
  mdp
)(RestaurantShow);
