import React from 'react';
import { connect } from 'react-redux';
import { createRestaurant } from '../../actions/RestaurantActions';
import OrderItemsList from '../OrderItemsList';
import OrderStatusSelect from './OrderStatusSelect';

const mapStateToProps = (state) => {
  return {
    restaurant: state.restaurant,
    order: state.order.currentOrder,
    meal: state.order.orderedItem,
    knownRestaurants: state.known_restaurants,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createRestaurant: (resName) => {dispatch(createRestaurant(resName))}
  };
};

class Restaurant extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  };
  }

  componentWillMount() {
  }

  updateResName(name) {
    this.setState({ resName: name });
  };

  render () {
    let { restaurant, createRestaurant, orderItems, order, meal, knownRestaurants} = this.props;
    let { resName } = this.state;
    if (restaurant) {
      return (
        <div className='today-restaurant'>
          <div>
            <div className="restaurant-chosen"> Today's restaurant is <span className="restaurant-name">{restaurant.name} </span>. 
            { meal? `Today your order was ${meal.name} for ${meal.cost} $` :  `Please make your order!` }

            </div>
          </div>
          <div className="todays-order ">
            <div className="col-xs-6 col-xs-offset-3"> Today's order is
              <OrderStatusSelect />
            </div>
            <div className="current-order">
              <OrderItemsList />
            </div>
          </div>
        </div>
        )
    }
    else {
      return (
        <div className="choose-restaurant">
          <h3> Create a new order by typing restaurant's name </h3>
          <div className="choose-restaurant-form">
            <input
                id="resName"
                type="text"
                list="restaurantsNames"
                onChange={(e) => this.updateResName(e.target.value)}
              />
              <datalist id="restaurantsNames">
                { knownRestaurants.map(restaurant => <option value={restaurant.name} key={restaurant.name}/>) }
              </datalist>
            <div className="btn btn-primary" onClick={()=> createRestaurant(resName)}> Select restaurant </div>
          </div>
        </div>
      );
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
