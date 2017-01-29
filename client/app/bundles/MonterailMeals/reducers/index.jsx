import { combineReducers } from 'redux';
import user from './user';
import order from './order';
import restaurant from './restaurant';
import known_restaurants from './knownRestaurants';

export default combineReducers({
  user,
  order,
  restaurant,
  known_restaurants,
});
