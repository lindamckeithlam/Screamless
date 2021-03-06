import * as OrdersApi from "../util/order_util";
import { removeAllItemsFromBag } from "./restaurant_actions";
export const RECEIVE_ONE_ORDER = "RECEIVE_ONE_ORDER";
export const RECEIVE_CURRENT_USER_DELIVERY_INSTRUCTIONS =
  "RECEIVE_CURRENT_USER_DELIVERY_INSTRUCTIONS";
export const RECEIVE_PREVIOUS_ORDERS = "RECEIVE_PREVIOUS_ORDERS";
export const REORDER_ITEMS = "REORDER_ITEMS";
export const RESET_REORDER = "RESET_REORDER";

export const checkoutOrder = history => (dispatch, getState) => {
  const currentOrder = getState().currentOrder;
  const newOrder = {
    ...currentOrder,
    restaurant_id: currentOrder.restaurantId,
    restaurant_name: currentOrder.restaurantName,
    user_id: getState().currentUser.id,
    items: JSON.stringify(currentOrder.items)
  };

  OrdersApi.createOrder(newOrder).then(order => {
    // clear user's order bag
    dispatch(removeAllItemsFromBag());

    // Add order to user's order state
    dispatch({
      type: RECEIVE_ONE_ORDER,
      order: {
        ...order,
        items: JSON.parse(order.items),
        restaurantId: order.restaurant_id,
        restaurantName: order.restaurant_name,
        deliveryInstructions: order.delivery_instructions
      },
      orderId: order.id
    });

    history.push(`/orders/${order.id}`);
  });
};

export const fetchOrder = id => dispatch =>
  OrdersApi.fetchOrder(id).then(order => {
    dispatch({
      type: RECEIVE_ONE_ORDER,
      order: {
        ...order,
        items: JSON.parse(order.items),
        restaurantId: order.restaurant_id,
        restaurantName: order.restaurant_name,
        deliveryInstructions: order.delivery_instructions
      },
      orderId: order.id
    });
  });

export const fetchUserOrders = () => (dispatch, getState) => {
  const userId = getState().currentUser.id;
  OrdersApi.fetchUserOrders(userId).then(orders =>
    dispatch({
      type: RECEIVE_PREVIOUS_ORDERS,
      orders: orders.map(o => ({
        ...o,
        items: JSON.parse(o.items),
        restaurantId: o.restaurant_id,
        restaurantName: o.restaurant_name
      }))
    })
  );
};

export const saveCurrentUserDeliveryInstructions = (
  id,
  instruction
) => dispatch => {
  return OrdersApi.saveDeliveryInstructions(id, instruction).then(() =>
    dispatch(receiveCurrentUserDeliveryInstructions(instruction))
  );
  // .fail(err => dispatch(receiveErrors(err.responseJSON)));
};

export const receiveCurrentUserDeliveryInstructions = instruction => {
  return { type: RECEIVE_CURRENT_USER_DELIVERY_INSTRUCTIONS, instruction };
};

export const reorderItems = order => dispatch =>
  dispatch({
    type: REORDER_ITEMS,
    order
  });

export const resetReorder = () => dispatch =>
  dispatch({
    type: RESET_REORDER
  });
