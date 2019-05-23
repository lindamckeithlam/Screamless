import React from "react";
import GoogleMap from "../GoogleMap";
import NavBar from "../NavBar";
import BrowseByCuisine from "../BrowseByCuisine";
import RestaurantBrowseRowsContainer from "../RestaurantBrowseRowsContainer";
import Footer from "../footer";
import classNames from "classnames";
import { connect } from "react-redux";
import { fetchRestaurants } from "../../actions/restaurant_actions";
import MarkerManager from "../markerManager";
import {
  filterByOpenNow,
  clearAllFilters,
  filterByRating,
  filterByPrice
} from "../../actions/filter_actions";

const msp = state => {
  return {
    filters: state.filters,
    restaurants: state.restaurants.restaurants
  };
};

const mdp = dispatch => ({
  onClearAllFilters: () => dispatch(clearAllFilters(cuisine)),
  onFilterByOpenNow: () => dispatch(filterByOpenNow()),
  onFilterByRating: rating => dispatch(filterByRating(rating)),
  onFilterByPrice: price => dispatch(filterByPrice(price)),
  onFetchRestaurants: () => dispatch(fetchRestaurants())
});

class BrowseByCategory extends React.Component {
  constructor(props) {
    super(props);
    this.locations = [];
  }
  clearAll = e => {
    e.preventDefault();
    this.props.onClearAllFilters();
  };
  toggleOpenFilter = () => {
    this.props.onFilterByOpenNow();
  };

  filterRating = rating => {
    if (this.props.filters.rating === rating) {
      this.props.onFilterByRating(null);
    } else {
      this.props.onFilterByRating(rating);
    }
  };

  filterPrice = price => {
    if (this.props.filters.price === price) {
      this.props.onFilterByPrice(null);
    } else {
      this.props.onFilterByPrice(price);
    }
  };
  componentDidMount() {
    this.props.onFetchRestaurants();
  }

  findLocations() {
    if (this.props.restaurants) {
      this.props.restaurants.forEach(r => this.locations.push(r.address));
    }
  }

  render() {
    const { filters } = this.props;
    const rating = filters.rating;
    this.findLocations();

    return (
      <>
        <NavBar />

        <div className="category-container">
          <div className="category-left">
            <h1>Filters</h1>
            <span>
              <a onClick={this.clearAll} href="#">
                Clear All
              </a>
            </span>
            <br />

            <div>
              <div className="feature-container">
                <div className="clickable" id="flip">
                  <h3>Feature</h3>
                </div>
                <form className="feature-dropdown">
                  <input
                    checked={filters.openNow}
                    onChange={this.toggleOpenFilter}
                    type="checkbox"
                  />
                  Open Now
                  <br />
                </form>
              </div>

              <div className="rating-container">
                {/* onClick={toggleShow} */}
                <h3>Rating</h3>

                <div className="rating-box">
                  <div
                    onClick={() => this.filterRating(1)}
                    className={classNames({
                      "star-container": true,
                      "star-filtered": rating && rating >= 1
                    })}
                  >
                    <i className="fas fa-star" />
                  </div>
                  <div className="vl" />

                  <div
                    onClick={() => this.filterRating(2)}
                    className={classNames({
                      "star-container": true,
                      "star-filtered": rating && rating >= 2
                    })}
                  >
                    <i className="fas fa-star" />
                  </div>
                  <div className="vl" />

                  <div
                    onClick={() => this.filterRating(3)}
                    className={classNames({
                      "star-container": true,
                      "star-filtered": rating && rating >= 3
                    })}
                  >
                    <i className="fas fa-star" />
                  </div>
                  <div className="vl" />

                  <div
                    onClick={() => this.filterRating(4)}
                    className={classNames({
                      "star-container": true,
                      "star-filtered": rating && rating >= 4
                    })}
                  >
                    <i className="fas fa-star" />
                  </div>
                  <div className="vl" />

                  <div
                    onClick={() => this.filterRating(5)}
                    className={classNames({
                      "star-container": true,
                      "star-filtered": rating && rating >= 5
                    })}
                  >
                    <i className="fas fa-star" />
                  </div>
                </div>
              </div>
              {/* <h3>Price</h3> */}

              {/* <div className="rating-box">
                <div className="clickable" onClick={() => this.filterPrice(1)}>
                  <i className="fas fa-dollar-sign" />
                </div>

                <div className="vl" />

                <div className="clickable" onClick={() => this.filterPrice(2)}>
                  <i className="fas fa-dollar-sign" />
                  <i className="fas fa-dollar-sign" />
                </div>

                <div className="vl" />

                <div className="clickable" onClick={() => this.filterPrice(3)}>
                  <i className="fas fa-dollar-sign" />
                  <i className="fas fa-dollar-sign" />
                  <i className="fas fa-dollar-sign" />
                </div>
                <div className="vl" />

                <div className="clickable" onClick={() => this.filterPrice(4)}>
                  <i className="fas fa-dollar-sign" />
                  <i className="fas fa-dollar-sign" />
                  <i className="fas fa-dollar-sign" />
                  <i className="fas fa-dollar-sign" />
                </div>

                <div className="vl" />

                <div className="clickable" onClick={() => this.filterPrice(5)}>
                  <i className="fas fa-dollar-sign" />
                  <i className="fas fa-dollar-sign" />
                  <i className="fas fa-dollar-sign" />
                  <i className="fas fa-dollar-sign" />
                  <i className="fas fa-dollar-sign" />
                </div>
              </div> */}
            </div>
          </div>
          <div className="category-right">
            <BrowseByCuisine />
            <GoogleMap addresses={this.locations} />
            <RestaurantBrowseRowsContainer />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
export default connect(
  msp,
  mdp
)(BrowseByCategory);
