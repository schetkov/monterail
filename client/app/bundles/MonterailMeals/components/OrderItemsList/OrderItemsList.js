import React from 'react';
import { connect } from 'react-redux';
import { makeOrder } from '../../actions/OrderActions';
import OrderItem from '../OrderItem';

const mapStateToProps = (state) => {
  return {
    items: state.order.currentOrderItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

class OrderItemsList extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    let {items} = this.props;
    if (!items.length) {
      return null
    } else {
      return (
        <div className="order-list-body col-xs-12">
          <div className="order-list-header col-xs-12">
            <span className="order-list-header name"> Meal name </span>
            <span className="order-list-header cost"> Meal cost </span>
          </div>
          <div> {this.props.items.map(item => <OrderItem item={item} key={item.id} />)} </div>
          <div className="col-xs-6 col-xs-offset-6 order-total">
            <span> Total: {this.props.items.reduce(function(sum,item){ return sum + item.cost; }, 0)} $ </span>
          </div>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderItemsList);
