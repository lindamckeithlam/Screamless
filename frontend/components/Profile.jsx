import React from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import BrowseByCuisine from "./BrowseByCuisine";
import PreviousOrders from "./users/PreviousOrders";
import RestaurantCardsContainer from "./RestaurantCardsContainer";
import Footer from "./footer";
import InitMap from "./GoogleMap";
import { Link } from "react-router-dom";

const msp = (state, ownProps) => {
  return {};
};

const mdp = dispatch => ({});

class ProfileContainer extends React.Component {
  render() {
    return (
      <div className="profile-container">
        {/* Top Nav Bar */}
        <NavBar />
        {/* Browse By Cuisine */}
        <BrowseByCuisine />
        {/* Previous Orders */}
        <PreviousOrders />
        {/* Restaurant Cards */}

        <RestaurantCardsContainer />

        <Footer />
      </div>
    );
  }
}

export default connect(
  msp,
  mdp
)(ProfileContainer);
