import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

  const middleware = thunk;
  let enhancer;

  let devToolsExtension = window.devToolsExtension();

  enhancer = compose(
    applyMiddleware(middleware),
    devToolsExtension,
  );

  const MenuStore = (railsProps) => (
    createStore(rootReducer, railsProps, enhancer)
  );

export default MenuStore;

