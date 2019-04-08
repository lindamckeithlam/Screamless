export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const RECEIVE_ONE_RESTAURANT = "RECEIVE_ONE_RESTAURANT";
export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const RECEIVE_CUISINES = "RECEIVE_CUISINES";
export const RECEIVE_CUISINE = "RECEIVE_CUISINE";
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

export const addItemToBag = (item, restaurantId) => dispatch =>
  dispatch({ type: RECEIVE_ITEM, item, restaurantId });

export const fetchCuisines = () => dispatch =>
  RestaurantApi.fetchCuisines().then(cuisines =>
    dispatch({ type: RECEIVE_CUISINES, cuisines })
  );
export const fetchCuisine = id => dispatch =>
  RestaurantApi.fetchCuisine(id).then(cuisine =>
    dispatch({ type: RECEIVE_CUISINE, cuisine })
  );
