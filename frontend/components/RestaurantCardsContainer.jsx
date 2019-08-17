import React from "react";
import { connect } from "react-redux";
import RestaurantCard from "./RestaurantCard";
import { fetchRestaurants } from "../actions/restaurant_actions";
import { Link } from "react-router-dom";
const msp = state => {
  return { restaurants: state.restaurants.restaurants };
};

const mdp = dispatch => ({
  onFetchRestaurants: () => dispatch(fetchRestaurants())
});

class RestaurantCardsContainer extends React.Component {
  componentDidMount() {
    this.props.onFetchRestaurants();
  }

  renderRestaurants = () => {
    const restaurants = this.props.restaurants.map((r, i) => (
      <RestaurantCard restaurant={r} key={i} className="restaurantCard" />
    ));
    return <div className="restaurant-container">{restaurants}</div>;
  };

  render() {
    let most_popular = <div />;
    if (this.props.restaurants.length === 0) {
      return most_popular;
    } else {
      most_popular = (
        <div className="toprated-category-container">
          <div className="modal-header-order-explore">
            Explore our collections
          </div>

          <br />

          <div className="test-container">
            <Link to="/browse" className="link-test">
              <h2 className="toprated-text">Most popular near you</h2>
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="cuisine-container">
        <div className="modal-header-order">Explore our collections</div>
        {this.renderRestaurants()}
      </div>
    );
  }
}

export default connect(
  msp,
  mdp
)(RestaurantCardsContainer);
