import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-flexbox-grid";
import { fetchRestaurants } from "../actions/restaurant_actions";
import RestaurantBrowseRow from "./RestaurantBrowseRow";

const msp = state => {
  debugger;
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
