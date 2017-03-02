import React from 'react';
import Menu from '../Menu';

class ApplicationContainer extends React.Component {

  render () {
    return (
      <div className="application-container col-xs-12">
        <div className="menu-container">
          <Menu />
        </div>
      </div>
    );
  }

}

export default ApplicationContainer;
