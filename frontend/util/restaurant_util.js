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
