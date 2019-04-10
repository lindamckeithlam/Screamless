export const saveAddress = (id, address) => {
  return $.ajax({
    method: "patch",
    url: `/api/users/${id}?address=${address}`
  });
};

export const fetchUser = id => {
  return $.ajax({
    method: "get",
    url: `/api/users/${id}`
  });
};

// export const fetchUserPastOrders = userId => {
//   return $.ajax({
//     method: 'get',

//   })
// }
