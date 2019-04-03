import React from "react";
import { Link } from "react-router-dom";
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
      menu = <MenuItems menu_items={this.props.currentRestaurant.menu_items} />;
    }

    return (
      <div className="restaurant-showpage-container">
        <NavBar />
        <div className="restaurant-banner">
          IMG GOES HERE!!!!!!
          <div className="restaurant-info">
            <h1>{this.props.currentRestaurant.name}</h1>
            <p>{this.props.currentRestaurant.address}</p>
            <p>{this.props.currentRestaurant.phone}</p>
          </div>
        </div>
        <div className="restaurant-links">
          <a href="">Menu</a>
          <a href="">About</a>
          <a href="">Review</a>
        </div>
        <div className="restaurant-line" />
        {menu}
        <div className="restaurant-bottom">
          <div className="restaurant-info2">
            <h3>About {this.props.currentRestaurant.name}</h3>
            <InitMap address={this.props.currentRestaurant.address} />
            <p>{this.props.currentRestaurant.address}</p>
            <div className="restaurant-line" />
            <p>{this.props.currentRestaurant.phone}</p>
            <div className="restaurant-line" />
          </div>
          <div className="restaurant-hours">
            <h3>Hours</h3>
            <br />
            <span>
              <p>Today</p>
              {this.props.currentRestaurant.open_time}-
              {this.props.currentRestaurant.close_time}
            </span>
            <div className="restaurant-line" />
          </div>
        </div>
        <div className="restaurant-reviews-main">
          <h3>Reviews for {this.props.currentRestaurant.name}</h3>

          <span>{count} ratings</span>
        </div>
        {reviews}
        <Footer />
      </div>
    );
  }
}

export default connect(
  msp,
  mdp
)(RestaurantShow);
