import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-flexbox-grid";
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
    let restaurantRows = this.props.restaurants.reduce(
      (rows, restaurant, i) => {
        let rowIndex = Math.floor(i / 4);

        i % 4 === 0
          ? (rows[rowIndex] = [restaurant])
          : rows[rowIndex].push(restaurant);

        return rows;
      },
      []
    );

    return restaurantRows.map(this.renderRestaurantRow);
  };

  renderRestaurantRow = (rowRestaurants, idx) => {
    return (
      <Row style={{ marginBottom: 5 }} key={idx} start="xs">
        {rowRestaurants.map(this.renderRestaurant)}
      </Row>
    );
  };

  renderRestaurant = restaurant => {
    return (
      <Col key={restaurant.id} xs>
        <RestaurantCard restaurant={restaurant} />
      </Col>
    );
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
      <Grid fluid className="cuisine-container-2">
        {/* <Row>
          <div className="modal-header-order" />
        </Row> */}
        <div className="modal-header-order-2">
          <div className="modal-header-order">Explore our collections</div>
          {this.renderRestaurants()}
        </div>
      </Grid>
    );
  }
}

export default connect(
  msp,
  mdp
)(RestaurantCardsContainer);
