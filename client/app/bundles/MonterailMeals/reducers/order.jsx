import { MAKE_ORDER, CREATE_ORDER, UPDATE_ORDER_STATUS } from '../constants/constants';

export default function order(state = {}, action) {
  switch(action.type) {
  case MAKE_ORDER:
    return {
        ...state,
        orderedItem: action.orderedItem,
        currentOrderItems: [...state.currentOrderItems, action.orderedItem]
      }
  case CREATE_ORDER:
    return {
      ...state,
      currentOrder: action.order
    }
  case UPDATE_ORDER_STATUS:
    return {
      ...state,
      currentOrder: action.order
    }
    default:
      return state;
  }
};
