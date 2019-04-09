export const FILTER_CUISINE = "FILTER_CUISINE";
export const FILTER_DISTANCE = "FILTER_DISTANCE";
export const FILTER_RATING = "FILTER_RATING";
export const FILTER_OPEN = "FILTER_OPEN";
export const FILTER_PRICE = "FILTER_PRICE";
export const CLEAR_ALL_FILTERS = "CLEAR_ALL_FILTERS";

export const filterByCuisine = cuisine => dispatch =>
  dispatch({ type: FILTER_CUISINE, cuisine });

export const filterByRating = rating => dispatch =>
  dispatch({ type: FILTER_RATING, rating });

export const filterByDistance = distance => dispatch =>
  dispatch({ type: FILTER_DISTANCE, distance });

export const filterByOpenNow = () => (dispatch, getState) => {
  const openNow = getState().filters.openNow;
  dispatch({ type: FILTER_OPEN, openNow: !openNow });
};

export const filterByPrice = price => dispatch => {
  dispatch({ type: FILTER_PRICE, price });
};

export const clearAllFilters = () => dispatch =>
  dispatch({ type: CLEAR_ALL_FILTERS });
