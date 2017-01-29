import React from 'react';

class OrderItem extends React.Component {

  render () {
    return (
      <div className="order-item col-xs-12">
        <div className="order-item-name col-xs-6">
          <span> {this.props.item.name} </span>
        </div>
        <div className="order-item-cost col-xs-6">
          <span> {this.props.item.cost} $ </span>
        </div>
      </div>
    )
  }
}

export default OrderItem;
