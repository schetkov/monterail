import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

  const middleware = thunk;
  let enhancer;

  enhancer = compose(
    applyMiddleware(middleware)
  );

  const MenuStore = (railsProps) => (
    createStore(rootReducer, railsProps, enhancer)
  );

export default MenuStore;


