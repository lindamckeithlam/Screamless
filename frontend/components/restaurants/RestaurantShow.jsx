import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import { Grid, Row, Col } from "react-flexbox-grid";
import {
  fetchRestaurant,
  fetchRestaurants
} from "../../actions/restaurant_actions";
import { connect } from "react-redux";

import InitMap from "../GoogleMap";

import Footer from "../footer";
import Reviews from "../restaurant_subcomponents/Reviews";
import MenuItems from "../restaurant_subcomponents/MenuItems";
const msp = state => {
  return {
    currentRestaurant: state.restaurants.currentRestaurant
  };
};

const mdp = dispatch => ({
  onFetchRestaurants: () => dispatch(fetchRestaurants()),
  onFetchRestaurant: id => dispatch(fetchRestaurant(id))
});

class RestaurantShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props
      .onFetchRestaurants()
      .then(
        this.props.onFetchRestaurant(this.props.match.params.restaurant_id)
      );
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.restaurant_id !=
      this.props.match.params.restaurant_id
    ) {
      this.props.onFetchRestaurant(this.props.match.params.restaurant_id);
    }
  }
  render() {
    let reviews = <div />;
    let count = <p>{count}</p>;
    let menu = <div />;

    if (this.props.currentRestaurant.reviews) {
      reviews = <Reviews reviews={this.props.currentRestaurant.reviews} />;
      count = Object.values(this.props.currentRestaurant.reviews).length;
    }

    if (this.props.currentRestaurant.menu_items) {
      menu = (
        <MenuItems
          restaurantId={this.props.currentRestaurant.id}
          menuItems={this.props.currentRestaurant.menu_items}
        />
      );
    }
    debugger;
    return (
      <div className="restaurant-showpage-container">
        <NavBar />
        <div className="restaurant-banner">
          IMG GOES HERE!!!!!!
          <div className="restaurant-info">
            <h1>{this.props.currentRestaurant.name}</h1>
            <p>{this.props.currentRestaurant.address}</p>
            <p>{this.props.currentRestaurant.phone}</p>
          </div>
        </div>
        <div className="restaurant-links">
          <a href="">Menu</a>
          <a href="">About</a>
          <a href="">Review</a>
        </div>
        <div className="restaurant-line" />
        {menu}

        <Grid fluid className="restaurant-bottom">
          <Row>
            <h3>About {this.props.currentRestaurant.name}</h3>
          </Row>
          <Row>
            <div>Restaruant description blah lbah</div>
          </Row>
          <Row>
            <div>$$$</div>
          </Row>
          <Row>
            <Col xs>
              <Row>
                <InitMap address={this.props.currentRestaurant.address} />
              </Row>
              <Row>
                <p>{this.props.currentRestaurant.address}</p>
                <div className="restaurant-line" />
              </Row>
              <Row>
                <p>{this.props.currentRestaurant.phone}</p>
                <div className="restaurant-line" />
              </Row>
            </Col>
            <Col xs>
              <Row>
                <h3>Hours</h3>
              </Row>
              <Row>
                <Col xs>Today</Col>
                <Col xs>
                  {`${this.props.currentRestaurant.open_time}:00am - ${
                    this.props.currentRestaurant.close_time
                  }:00pm`}
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <div className="restaurant-reviews-main">
              <h3>Reviews for {this.props.currentRestaurant.name}</h3>

              <span>{count} ratings</span>
            </div>
          </Row>
          <Row>{reviews}</Row>
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default connect(
  msp,
  mdp
)(RestaurantShow);

/**
 * <Row>
  <div className="restaurant-info2">
    <h3>About {this.props.currentRestaurant.name}</h3>
              <div>Restaruant description blah lbah</div>
              <div>$$$</div> 
<InitMap address={this.props.currentRestaurant.address} />
  <p>{this.props.currentRestaurant.address}</p>
  <div className="restaurant-line" />
  <p>{this.props.currentRestaurant.phone}</p>
  <div className="restaurant-line" />
  </div >
  <div className="restaurant-hours">
    <h3>Hours</h3>
    <br />
    <span>
      <p>Today</p>
      {this.props.currentRestaurant.open_time}-
                {this.props.currentRestaurant.close_time}
    </span>
    <div className="restaurant-line" />
  </div>
</Row >
  <Row>
    <div className="restaurant-reviews-main">
      <h3>Reviews for {this.props.currentRestaurant.name}</h3>

      <span>{count} ratings</span>
    </div>
  </Row>
  <Row>{reviews}</Row>
 *  */
