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
// const api = "e7c1db62b5bfa277d4f7bb312bb4b07e";

// export const fetchZomatoMenu = () => (
//   $.ajax({
//     method: 'GET',
//     url: ``
//   })
// )
