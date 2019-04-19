export const createOrder = order =>
  $.ajax({
    method: "POST",
    // data: {order},
    url: "/api/restaurants"
  });
