import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import store from './redux/store';
import Routes from './navigations/Routes';

const theme = {
  ...DefaultTheme,
  dark: false,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Routes />
      </PaperProvider>
    </Provider>
  );
};

export default App;
