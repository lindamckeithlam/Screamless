export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const RECEIVE_ONE_RESTAURANT = "RECEIVE_ONE_RESTAURANT";
import * as RestaurantApi from "../util/restaurant_util";

export const fetchRestaurants = () => dispatch =>
  RestaurantApi.fetchRestaurants().then(restaurants =>
    dispatch({ type: RECEIVE_RESTAURANTS, restaurants })
  );

export const fetchRestaurant = id => dispatch =>
  RestaurantApi.fetchRestaurant(id).then(currentRestaurant =>
    dispatch({
      type: RECEIVE_ONE_RESTAURANT,
      currentRestaurant: currentRestaurant,
      restaurantId: currentRestaurant.id
    })
  );
