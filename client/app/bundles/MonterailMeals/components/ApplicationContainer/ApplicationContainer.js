import React from 'react';
import Header from '../Header';
import Menu from '../Menu';

class ApplicationContainer extends React.Component {

  render () {
    return (
      <div className="application-container">
        <div className="header">
          <Header />
        </div>
        <div className="menu-container">
          <Menu />
        </div>
      </div>
    );
  }

}

export default ApplicationContainer;
