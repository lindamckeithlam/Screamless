import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-flexbox-grid";
import CuisineCard from "./CuisineCard";
import Carousel from "react-multi-carousel";

import {
  fetchRestaurant,
  fetchRestaurants,
  fetchCuisines,
  fetchCuisine
} from "../actions/restaurant_actions";

const msp = state => {
  return {
    restaurants: Object.values(state.restaurants.restaurants),
    cuisines: Object.values(state.cuisines)
  };
};

const mdp = dispatch => ({
  onFetchRestaurants: () => dispatch(fetchRestaurants()),
  onFetchRestaurant: id => dispatch(fetchRestaurant(id)),
  onFetchCuisines: () => dispatch(fetchCuisines()),
  onFetchCuisine: id => dispatch(fetchCuisine(id))
});

class BrowseByCuisine extends React.Component {
  componentDidMount() {
    this.props.onFetchCuisines();
  }

  getCarousel = () => {
    let cuisines = [];
    if (cuisines.length !== 23) {
      {
        this.props.restaurants.forEach(r => {
          if (cuisines.includes(r.cuisine_name) === false) {
            cuisines.push(r.cuisine_name);
          }
        });
      }
    } else {
      cuisines = this.props.cuisines[0];
    }

    if (!cuisines.length) return;

    const cuisineCards = cuisines.map((c, idx) => (
      <CuisineCard key={idx} cuisineName={c} url={c.img_url} />
    ));

    cuisineCards.unshift(
      <CuisineCard
        key="all-restaurants"
        cuisineName="See all restaurants"
        url="https://i.imgur.com/5wiDGLB.png"
      />
    );
    debugger;
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
