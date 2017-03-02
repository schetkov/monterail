import React from 'react';
import ArchievedOrderItem from './ArchievedOrderItem';
import ExpandedArchievedOrderItem from './ExpandedArchievedOrderItem';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
      archievedOrders: state.order.archievedOrders,
    }
  }

class ArchievedOrdersList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { selectedOrderIndex: 0}
  }

  setSelected(index) {
    this.setState({ selectedOrderIndex: index })
  }

  render () {

    let { archievedOrders } = this.props;
    let { selectedOrderIndex } = this.state;
    return (
      <div className="col-xs-8 col-xs-offset-2">
        <div className="col-xs-5">
          <h3> Archieved Orders List </h3>
        </div>
        <div className="col-xs-2"> </div>
        <div className="col-xs-5">
          <h3> Order details </h3>
        </div>
        <div className=" arch-item-table col-xs-5">
          <div className="arch-item-table-header col-xs-12">
            <div className="col-xs-4">
              <span> Date </span>
            </div>
            <div className="col-xs-4">
              <span> Restaurant </span>
            </div>
            <div className="col-xs-2">
              <span> Items ordered </span>
            </div>
            <div className="col-xs-2">
              <span> Total cost </span>
            </div>
          </div>
          <div className="arch-item-table-content">
            { archievedOrders.map( (archItem, index) =>
              <div
                className={ index == this.state.selectedOrderIndex ? "col-xs-12 selected-archieved-order no-paddiing" : "no-paddiing" }
                key={`archItemDiv` + archItem.date} onMouseOver={() => this.setSelected(index)}>
                <ArchievedOrderItem item={archItem} key={`archItem` + archItem.date} />
              </div>
              ) }
          </div>
        </div>
        <div className="col-xs-2"> </div>
        <div className="expanded-archieved-order-item col-xs-5" >
          <ExpandedArchievedOrderItem order={archievedOrders[selectedOrderIndex]} />
        </div>
      </div>
    );
  }

}

export default connect (mapStateToProps)(ArchievedOrdersList);
