import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-flexbox-grid";
import CuisineCard from "./CuisineCard";
import Carousel from "react-multi-carousel";

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
  getCarousel = () => {
    const cuisines = [];
    {
      this.props.restaurants.forEach(r => {
        if (cuisines.includes(r.cuisine_name) === false) {
          cuisines.push(r.cuisine_name);
        }
      });
    }

    if (!cuisines.length) return;

    const cuisineCards = cuisines.map((c, idx) => (
      <CuisineCard
        key={idx}
        cuisineName={c}
        url="https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,c_fill,w_124,h_124,f_auto,q_auto,g_auto/search/browse-images/salads.jpg"
      />
    ));

    cuisineCards.unshift(
      <CuisineCard
        key="all-restaurants"
        cuisineName="See all restaurants"
        url="https://i.imgur.com/5wiDGLB.png"
      />
    );

    return (
      <Carousel
        responsive={responsive}
        showDots={false}
        slidesToSlide={1}
        arrows={true}
        ssr
        // customLeftArrow={<CustomLeftArrow />}
        // customRightArrow={<CustomRightArrow />}
      >
        {cuisineCards}
      </Carousel>
    );
  };

  render() {
    return (
      <Grid className="cuisine-container">
        <Row>
          <div className="modal-header-order">Browse by cuisine</div>
        </Row>
        <Row>{this.getCarousel()}</Row>
      </Grid>
    );
  }
}

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 8,
    paritialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 4,
    paritialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 5,
    paritialVisibilityGutter: 30
  }
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    state: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button onClick={() => onClick()} />;
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    state: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button onClick={() => onClick()} />;
};

export default connect(
  msp,
  mdp
)(BrowseByCuisine);
