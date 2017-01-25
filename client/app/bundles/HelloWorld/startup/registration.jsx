import ReactOnRails from 'react-on-rails';

import Menu from '../components/Menu';
import MenuStore from '../store/MenuStore';
import App from './App';

ReactOnRails.register({
  Menu,
  App,
});

ReactOnRails.registerStore({
  MenuStore,
});
