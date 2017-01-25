import React from 'react';
import { Provider } from 'react-redux';
import ReactOnRails from 'react-on-rails';

import ApplicationContainer from '../components/ApplicationContainer';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default (props, railsContext) => {
  const store = ReactOnRails.getStore('MenuStore');

  return (
    <Provider store={store}>
      <ApplicationContainer />
    </Provider>
  );
};
