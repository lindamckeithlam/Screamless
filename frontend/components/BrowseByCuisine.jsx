import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-flexbox-grid";
import CuisineCard from "./CuisineCard";

const msp = (state, ownProps) => {
  return {};
};

const mdp = dispatch => ({});

class BrowseByCuisine extends React.Component {
  render() {
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
          <Col xs>
            <CuisineCard
              cuisineName="Salads"
              url="https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/salads.jpg"
            />
          </Col>
          <Col xs>
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
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default connect(
  msp,
  mdp
)(BrowseByCuisine);
