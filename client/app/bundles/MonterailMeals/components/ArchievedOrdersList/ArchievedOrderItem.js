import React from 'react';


class ArchievedOrderItem extends React.Component {

  constructor(props) {
    super(props);
  }
  render () {

    let { item } = this.props;

    return (
      <div className={'arch-item col-xs-12'}>
        <div className="arch-item-date col-xs-4">
          <span> { item.date } </span>
        </div>
        <div className="arch-item-items-count col-xs-4">
          <span> { item.restaurant } </span>
        </div>
        <div className="arch-item-rest col-xs-2">
          <span> { item.itemsCount } </span>
        </div>
        <div className="arch-item-cost col-xs-2">
          <span> { '$' + item.totalCost } </span>
        </div>
      </div>
    );
  }

}

export default ArchievedOrderItem;
