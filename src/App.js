import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import Routes from './navigations/Routes';

const App = () => {
  return (
    <Provider store={store}>
        <Routes />
    </Provider>
  );
};

export default App;
