import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';
import Menu from '../Menu';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

class ApplicationContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  };
  }

  componentWillMount() {
  }


  render () {
    return (
      <div className="application-container">
        <div className="header">
          <Header />
        </div>
        <div className="menu-container">
          <Menu />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationContainer);
