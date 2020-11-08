import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import store from './redux/store';
import Routes from './navigations/Routes';
import Colors from './constants/colors'

const theme = {
  ...DefaultTheme,
  dark: false,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    accent: Colors.accent,
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <StatusBar backgroundColor={theme.colors.primary} />
        <Routes />
      </PaperProvider>
    </Provider>
  );
};

export default App;
