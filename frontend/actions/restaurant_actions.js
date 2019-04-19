export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const RECEIVE_ONE_RESTAURANT = "RECEIVE_ONE_RESTAURANT";
export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const REMOVE_ALL_ITEMS = "REMOVE_ALL_ITEMS";
export const RECEIVE_CUISINES = "RECEIVE_CUISINES";
import * as RestaurantApi from "../util/restaurant_util";
import * as OrdersApi from "../util/order_util";

export const fetchRestaurants = () => dispatch =>
  RestaurantApi.fetchRestaurants().then(restaurants =>
    dispatch({
      type: RECEIVE_RESTAURANTS,
      restaurants: Object.values(restaurants)
    })
  );

export const fetchRestaurant = id => dispatch =>
  RestaurantApi.fetchRestaurant(id).then(currentRestaurant =>
    dispatch({
      type: RECEIVE_ONE_RESTAURANT,
      currentRestaurant: currentRestaurant,
      restaurantId: currentRestaurant.id
    })
  );

export const checkoutOrder = () => (dispatch, getState) => {
  const currentOrder = getState().currentOrder.currentOrder;

  OrdersApi.createOrder(currentOrder).then(order => {
    // dispatch that oder was created
    // navigate to new order complete page
    // add this order to users previous order
    // dispatch({
    // })
  });
};

export const addItemToBag = (item, restaurantId) => dispatch =>
  dispatch({ type: RECEIVE_ITEM, item, restaurantId });

export const removeItemFromBag = item => dispatch =>
  dispatch({ type: REMOVE_ITEM, item });

export const removeAllItemsFromBag = () => dispatch =>
  dispatch({ type: REMOVE_ALL_ITEMS });

export const fetchCuisines = () => dispatch =>
  RestaurantApi.fetchCuisines().then(cuisines =>
    dispatch({ type: RECEIVE_CUISINES, cuisines: Object.values(cuisines) })
  );
