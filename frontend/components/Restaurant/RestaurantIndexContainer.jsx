import { connect } from "react-redux";
import RestaurantIndex from "./RestaurantIndex";
import { fetchRestaurants } from "../../util/restaurant_util";

const msp = state => {
  return { restaurants: state.restaurants };
};

const mdp = dispatch => ({
  onFetchRestaurants: () => dispatch(fetchRestaurants())
});

export default connect(
  msp,
  mdp
)(RestaurantIndex);
