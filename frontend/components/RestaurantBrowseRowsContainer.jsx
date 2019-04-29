import React from "react";
import { connect } from "react-redux";
import { Grid } from "react-flexbox-grid";
import { fetchRestaurants } from "../actions/restaurant_actions";
import RestaurantBrowseRow from "./RestaurantBrowseRow";

const msp = state => {
  const filters = state.filters;
  let restaurants = state.restaurants.restaurants;

  if (filters.rating) {
    restaurants = restaurants.filter(r => r.rating >= filters.rating);
  }

  if (filters.cuisine) {
    restaurants = restaurants.filter(r => r.cuisine_name === filters.cuisine);
  }

  if (filters.price) {
    restaurants = restaurants.filter(r => r.price <= filters.price);
  }

  if (filters.distance) {
    // restaurants = restaurants.filter(r => r.address === filters.cuisine);
  }

  if (filters.openNow) {
    const currentHour = new Date().getHours();
    restaurants = restaurants.filter(r => {
      return r.open_time < currentHour && r.close_time > currentHour;
    });
  }

  return {
    restaurants,
    filters
  };
};

const mdp = dispatch => ({
  onFetchRestaurants: () => dispatch(fetchRestaurants())
});

class RestaurantBrowseRowsContainer extends React.Component {
  componentDidMount() {
    if (!this.props.restaurants.length) {
      this.props.onFetchRestaurants();
    }
  }

  render() {
    return (
      <Grid fluid>
        {/* Each row is a restaurant */}
        <RestaurantBrowseRow restaurants={this.props.restaurants} />
        <RestaurantBrowseRow />
        <RestaurantBrowseRow />
      </Grid>
    );
  }
}

export default connect(
  msp,
  mdp
)(RestaurantBrowseRowsContainer);
