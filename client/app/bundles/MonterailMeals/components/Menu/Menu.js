import React from 'react';
import { connect } from 'react-redux';
import Restaurant from '../Restaurant';
import OrderForm from '../OrderForm';
import ArchievedOrdersList from '../ArchievedOrdersList';

const mapStateToProps = (state) => {
  return {
    restaurant: state.restaurant
  };
};

class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    let {restaurant} = this.props;
    return (
      <div>
        <div className="menu-for-today col-xs-12 col-sm-6 col-sm-offset-3">
          <Restaurant />
          { restaurant? <OrderForm /> : null }
        </div>
        <div className="arch-orders">
          <ArchievedOrdersList />
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps)(Menu);
