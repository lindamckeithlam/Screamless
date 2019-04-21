export const createOrder = order =>
  $.ajax({
    method: "post",
    data: { order },
    url: "/api/orders"
  });

export const fetchOrder = id =>
  $.ajax({
    method: "get",
    url: `/api/orders/${id}`
  });

export const fetchUserOrders = userId => {
  return $.ajax({
    method: "get",
    url: `/api/orders/?user_id=${userId}`
  });
};
