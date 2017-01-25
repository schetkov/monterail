import { ADD_ITEM_TO_ORDER} from '../constants/constants';

export default function orderedItem(state = {}, action) {
  switch(action.type) {
  case ADD_ITEM_TO_ORDER:
    return {
        ...state,
        orderedItem: action.orderedItem
      }
  case CREATE_ORDER:
    return {
    default:
      return state;
  }
};
