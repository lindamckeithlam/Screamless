import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-flexbox-grid";
import { fetchRestaurants } from "../actions/restaurant_actions";
import RestaurantBrowseRow from "./RestaurantBrowseRow";

const msp = state => {
  return { restaurants: state.restaurants.restaurants };
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
    // if (this.props.restaurants.length === 0) {
    //   return <div />;
    // }

    return (
      <Grid fluid>
        {/* Each row is a restaurant */}
        <RestaurantBrowseRow />
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
