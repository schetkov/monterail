import ReactOnRails from 'react-on-rails';

import Menu from '../components/Menu';
import MenuStore from '../store/MenuStore';
import App from './App';
import ApplicationContainer from '../components/ApplicationContainer';
import OrderForm from '../components/OrderForm';
import Restaurant from '../components/Restaurant';
import OrderItemsList from '../components/OrderItemsList';
import OrderItem from '../components/OrderItem';
import OrderStatusSelect from '../components/Restaurant';
import ArchievedOrdersList from '../components/ArchievedOrdersList';
import ArchievedOrdersItem from '../components/ArchievedOrdersList';
import ExpandedArchievedOrderItem from '../components/ArchievedOrdersList';

ReactOnRails.register({
  Menu,
  App,
  ApplicationContainer,
  OrderForm,
  Restaurant,
  OrderItemsList,
  OrderItem,
  OrderStatusSelect,
  ArchievedOrdersList,
  ArchievedOrdersItem,
});

ReactOnRails.registerStore({
  MenuStore,
});
