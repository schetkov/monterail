import React from 'react';
import { connect } from 'react-redux';
import { makeOrder } from '../../actions/OrderActions';

const mapStateToProps = (state) => {
  return {
    orderedItem: state.order.orderedItem,
    currentUser: state.user,
    orderStatus: state.order.currentOrder.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    makeOrder: (orderName, orderCost) => {dispatch(makeOrder(orderName, orderCost))}
  };
};

class OrderForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { orderName: '', orderCost: 0 };
  }

  updateOrderName(name) {
    this.setState({ orderName: name });
  };

  updateOrderCost(cost) {
    this.setState({ orderCost: cost });
  }

  render () {
    let { orderName, orderCost } = this.state;
    let { makeOrder, currentUser, orderedItem, orderStatus} = this.props;
    if (orderedItem || orderStatus != 'active') {
      return null
    } else {
      return (
        <div className="make-order-form col-xs-12">
          <div className="col-xs-5">
            <input
              className="form-control"
              id="orderName"
              type="text"
              placeholder="Meal name"
              onChange={(e) => this.updateOrderName(e.target.value)}
            />
            </div>
            <div className="col-xs-5">
              <input
                className="form-control"
                id="orderCost"
                type="number"
                pattern="[0-9]+([\.,][0-9]+)?" step="0.01"
                placeholder="Meal cost"
                onChange={(e) => this.updateOrderCost(e.target.value)}
              />
            </div>
          <div className=" order-button-container col-xs-12">
            <div className="btn btn-primary" onClick={()=> makeOrder(orderName, Math.round(orderCost * 100) / 100, currentUser.id)}> Make Order </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
