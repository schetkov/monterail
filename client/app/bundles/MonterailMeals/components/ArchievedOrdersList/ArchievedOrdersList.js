import React from 'react';
import { connect } from 'react-redux';
import ArchievedOrderItem from './ArchievedOrderItem';

const mapStateToProps = (state) => {
  return {
    archievedOrders: state.order.archievedOrders
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

class ArchievedOrdersList extends React.Component {

  constructor(props) {
    super(props);
  }

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
        { archievedOrders.map(archItem => <ArchievedOrderItem item={archItem} key={`archItem` + archItem.id} />) }
      </div>
    );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArchievedOrdersList);
