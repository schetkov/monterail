import React from 'react';
import { Provider } from 'react-redux';
import ReactOnRails from 'react-on-rails';

import ApplicationContainer from '../components/ApplicationContainer';

export default (props, railsContext) => {
  const store = ReactOnRails.getStore('MenuStore');

  return (
    <Provider store={store}>
      <ApplicationContainer />
    </Provider>
  );
};
