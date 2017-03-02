import React from 'react';
import { connect } from 'react-redux';
import { ORDER_STATUSES } from '../../constants/constants';
import { changeOrderStatus } from '../../actions/OrderActions';

const mapStateToProps = (state) => {
  return {
    initialStatus: state.order.currentOrder.status,
    orderId: state.order.currentOrder.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeOrderStatus: (orderId, orderStatus) => { dispatch(changeOrderStatus(orderId, orderStatus)) }
  };
};

class OrderStatusSelect extends React.Component {

  constructor(props) {
    super(props);
    this.findStatus = this.findStatus.bind(this);
  }

  componentWillMount() {
    this.setState({ orderStatus: this.findStatus(this.props.initialStatus)})
  }

  change(status){
    let { initialStatus }= this.props
    if ( status > this.findStatus(initialStatus)) { this.setState({ orderStatus: status }); }
    this.props.changeOrderStatus(this.props.orderId, status)
  }

  findStatus(status){
    let result = ORDER_STATUSES.find(x => x["status"] === status);
    return result["id"];
  }

  render () {
    let { initialStatus } = this.props;
    let { orderStatus } = this.state;

    return (
        <select value={orderStatus} onChange={(e) => this.change(e.target.value)} className="form-control">
          {ORDER_STATUSES.map(status =>
            <option value={status["id"]} key={`status_` + status["id"]}> {status["status"].toUpperCase()} </option>
          )}
        </select>
      )
  }


}

export default connect(mapStateToProps, mapDispatchToProps)(OrderStatusSelect);
