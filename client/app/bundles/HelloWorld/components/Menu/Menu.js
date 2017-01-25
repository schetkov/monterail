import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  };
  }

  componentWillMount() {
  }


  render () {
    return (
      <div className="menu-for-today">
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
