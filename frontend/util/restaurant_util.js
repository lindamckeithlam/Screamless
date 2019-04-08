export const fetchRestaurants = () =>
  $.ajax({
    method: "GET",
    url: "/api/restaurants"
  });
export const fetchRestaurant = id =>
  $.ajax({
    method: "GET",
    url: `/api/restaurants/${id}`,
    data: { id }
  });

export const fetchCuisines = () =>
  $.ajax({
    method: "GET",
    url: `/api/cuisines`
  });

export const fetchCuisine = id =>
  $.ajax({
    method: "GET",
    url: `/api/cuisines/${id}`,
    data: { id }
  });
