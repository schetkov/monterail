import { combineReducers } from 'redux';
import username from './username';
import order from './order';
import restaurant from './restaurant';

export default combineReducers({
  username,
  order,
  restaurant,
});
