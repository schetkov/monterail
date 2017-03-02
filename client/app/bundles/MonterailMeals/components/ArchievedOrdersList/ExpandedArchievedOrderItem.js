import React from 'react';


class ExpandedArchievedOrderItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {

    let { order } = this.props;

    return (
      <div className="expanded-arch-item col-xs-12">
        <div className="expanded-items-table-header">
          <div className="col-xs-6">
            <span> Meal name </span>
          </div>
          <div className="col-xs-6">
            <span> Item cost </span>
          </div>
        </div>
        <div className="expanded-arch-item-table">
          { order["items"].map( (orderItem, index) =>
            <div className="expanded-arch-item-row col-xs-12 no-padding" key={'expandedArchievedrder' + index}>
              <div className="col-xs-6 expanded-item-name">
                <span> { orderItem.item_name } </span>
              </div>
              <div className="col-xs-6 expanded-item-cost">
                <span> { '$' + orderItem.item_cost } </span>
              </div>
            </div>
            )}
          </div>
          <div className="col-xs-12 expanded-total">
            <div className="col-xs-6 ">
              <span>  Total:  </span>
            </div>
            <div className="col-xs-6 expanded-order-total">
              <span> { '$' + order.totalCost } </span>
            </div>
          </div>
      </div>
    );
  }

}

export default ExpandedArchievedOrderItem;
