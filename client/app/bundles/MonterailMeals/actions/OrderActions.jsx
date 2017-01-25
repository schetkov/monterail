import { MAKE_ORDER, UPDATE_ORDER_STATUS } from '../constants/constants';


export function orderCreatedSuccessfully(result) {
  return {
    type: MAKE_ORDER,
    orderedItem: result
  }
}

export function makeOrder(orderName, orderCost, currentUser) {
  return  function (dispatch, getState) {
    let url = "/items";

    $.ajax({
      url : url,
      type : 'POST',
      dataType: 'json',
    data: {item: {name: orderName, cost: orderCost, user: currentUser}},
    success : function(data, status, xhr) {
        dispatch(orderCreatedSuccessfully(data));
      },
      error : function(xhr, data) {
        window.alert("Sorry, we can't accept your order now. Please try again later");
      }
    });
  }
}

export function orderStatusUpdatedSuccessfully(result) {
  return {
    type: UPDATE_ORDER_STATUS,
    order: result
  }
}

export function changeOrderStatus(orderId, orderStatus) {
  return function (dispatch, getState) {
    let url = "/orders/" + orderId;

    $.ajax({
      url : url,
      type : 'PUT',
      dataType: 'json',
    data: {status: parseInt(orderStatus)},
    success : function(data, status, xhr) {
        dispatch(orderStatusUpdatedSuccessfully(data));
      },
      error : function(xhr, data) {
        window.alert("Sorry, we can't change order status now. Please try again later");
      }
    });
  }
}
