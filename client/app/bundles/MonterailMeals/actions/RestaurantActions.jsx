import { CREATE_RESTAURANT, CREATE_ORDER } from '../constants/constants';

export function restaurantCreatedSuccessfully(restaurant) {
  return {
    type: CREATE_RESTAURANT,
    restaurant
  }
}

export function orderCreatedSuccessfully(result) {
  return {
    type: CREATE_ORDER,
    order: result
  }
}

export function createRestaurant(resName) {
  return  function (dispatch, getState) {
    let url = "/restaurants"

    $.ajax({
      url : url,
      type : 'POST',
      dataType: 'json',
    data: {restaurant: {name: resName}},
      success : function(data, status, xhr) {
        dispatch(orderCreatedSuccessfully(data.order));
        dispatch(restaurantCreatedSuccessfully(data.restaurant));
      },
      error : function(xhr, data) {
        window.alert("Sorry, restaurant wasn't created or found. Please try again later");
      }
    });
  }
}
