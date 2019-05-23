import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-flexbox-grid";
import CuisineCard from "./CuisineCard";
import Carousel from "react-multi-carousel";

import {
  fetchRestaurant,
  fetchRestaurants,
  fetchCuisines
} from "../actions/restaurant_actions";

import { filterByCuisine, clearAllFilters } from "../actions/filter_actions";

const msp = state => {
  return {
    restaurants: state.restaurants.restaurants,
    cuisines: state.cuisines.cuisines
  };
};

const mdp = dispatch => ({
  onFetchRestaurants: () => dispatch(fetchRestaurants()),
  onFetchRestaurant: id => dispatch(fetchRestaurant(id)),
  onFetchCuisines: () => dispatch(fetchCuisines()),
  onFilterByCuisine: cuisine => dispatch(filterByCuisine(cuisine)),
  onClearAllFilters: () => dispatch(clearAllFilters(cuisine))
});

class BrowseByCuisine extends React.Component {
  componentDidMount() {
    this.props.onFetchCuisines();
  }

  getCarousel = () => {
    const { cuisines, onFilterByCuisine, onClearAllFilters } = this.props;
    if (!cuisines.length) return;

    const cuisineCards = cuisines.map((c, idx) => (
      <CuisineCard
        onClick={() => onFilterByCuisine(c.cuisine_name)}
        key={idx}
        cuisineName={c.cuisine_name}
        url={c.img_url}
      />
    ));

    cuisineCards.unshift(
      <CuisineCard
        key={Math.floor(Math.random() * 100)}
        cuisineName="See all restaurants"
        url="https://i.imgur.com/5wiDGLB.png"
        onClick={onClearAllFilters}
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
    const { cuisines, onFilterByCuisine, onClearAllFilters } = this.props;

    return (
      <Grid className="cuisine-container">
        <Row key={Math.floor(Math.random() * 100)}>
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
