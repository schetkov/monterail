import React from 'react';
import ArchievedOrderItem from './ArchievedOrderItem';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
      archievedOrders: state.order.archievedOrders,
    }
  }

class ArchievedOrdersList extends React.Component {

  render () {

    let { archievedOrders } = this.props;

    return (
      <div className="col-xs-12">
        <h3> Archieved Orders List </h3>
        <div className="arch-item-table-header col-xs-12">
          <div className="col-xs-3">
            <span> Date </span>
          </div>
          <div className="col-xs-3">
            <span> Restaurant </span>
          </div>
          <div className="col-xs-3">
            <span> Items ordered </span>
          </div>
          <div className="col-xs-3">
            <span> Total cost </span>
          </div>
        </div>
        { archievedOrders.map(archItem => <ArchievedOrderItem item={archItem} key={`archItem` + archItem.date} />) }
      </div>
    );
  }

}

export default connect (mapStateToProps)(ArchievedOrdersList);
