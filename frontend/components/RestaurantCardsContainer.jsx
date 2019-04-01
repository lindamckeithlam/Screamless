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
        let rowIndex = Math.floor(i / 3);

        i % 3 === 0
          ? (rows[rowIndex] = [restaurant])
          : rows[rowIndex].push(restaurant);

        return rows;
      },
      []
    );

    return restaurantRows.map(this.renderRestaurantRow);
  };

  renderRestaurantRow = (rowRestaurants, idx) => {
    return <Row key={idx}>{rowRestaurants.map(this.renderRestaurant)}</Row>;
  };

  renderRestaurant = restaurant => {
    return (
      <Col key={restaurant.id} xs>
        <RestaurantCard restaurant={restaurant} />
      </Col>
    );
  };

  render() {
    if (this.props.restaurants.length === 0) {
      return <div />;
    }

    return (
      <>
        <div className="modal-header-order-explore">
          Explore our collections
        </div>

        <br />
        <div className="toprated-category-container">
          {/* <div className="toprated-category">
          
          </div> */}

          <div className="test-container">
            <h2 className="toprated-text">Most popular near you</h2>
          </div>

          <Grid className="cuisine-container">
            <Row>{/* <div className="modal-header-order" /> */}</Row>
            {this.renderRestaurants()}
          </Grid>
        </div>
      </>
    );
  }
}

export default connect(
  msp,
  mdp
)(RestaurantCardsContainer);
