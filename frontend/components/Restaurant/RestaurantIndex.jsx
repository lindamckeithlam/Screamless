import React from "react";
import { Link } from "react-router-dom";

class RestaurantIndex extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }
  render() {
    return <div>//RestaurantIndex</div>;
  }
}

export default RestaurantIndex;
