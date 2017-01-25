import { CREATE_RESTAURANT } from '../constants/constants';

export default function restaurant(state = {}, action) {
  switch (action.type) {
  case CREATE_RESTAURANT:
    return {
        ...state,
        ...action.restaurant
      }
    default:
      return state;
  }
}
