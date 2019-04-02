import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-flexbox-grid";
import CuisineCard from "./CuisineCard";
import {
  fetchRestaurant,
  fetchRestaurants
} from "../actions/restaurant_actions";

const msp = state => {
  return {
    restaurants: state.restaurants.restaurants
  };
};

const mdp = dispatch => ({
  onFetchRestaurants: () => dispatch(fetchRestaurants()),
  onFetchRestaurant: id => dispatch(fetchRestaurant(id))
});

class BrowseByCuisine extends React.Component {
  render() {
    const cuisines = [];
    {
      this.props.restaurants.forEach(r => {
        if (cuisines.includes(r.cuisine_name) === false) {
          cuisines.push(r.cuisine_name);
        }
      });
    }

    let cuisine = cuisines.map((c, idx) => (
      <Col xs>
        <CuisineCard
          key={idx}
          cuisineName={c}
          url="https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/salads.jpg"
        />
      </Col>
    ));

    return (
      <Grid className="cuisine-container">
        <Row>
          <div className="modal-header-order">Browse by cuisine</div>
        </Row>
        <Row>
          <Col xs>
            <CuisineCard
              cuisineName="See all restaurants"
              url="https://i.imgur.com/5wiDGLB.png"
            />
          </Col>
          {/* <Col xs> */}
          {cuisine}
          {/* <CuisineCard
              cuisineName="Salads"
              url="https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/salads.jpg"
            /> */}
          {/* </Col> */}
          {/* <Col xs>
            <CuisineCard
              cuisineName="Vegetarian"
              url="https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/vegetarian.jpg"
            />
          </Col>
          <Col xs>
            <CuisineCard
              cuisineName="Sandwiches"
              url="https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/sandwiches.jpg"
            />
          </Col>
          <Col xs>
            <CuisineCard
              cuisineName="Italian"
              url="https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/italian.jpg"
            />
          </Col>
          <Col xs>
            <CuisineCard
              cuisineName="Ice Cream"
              url="https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/ice-cream.jpg"
            />
          </Col> */}
        </Row>
      </Grid>
    );
  }
}

export default connect(
  msp,
  mdp
)(BrowseByCuisine);
