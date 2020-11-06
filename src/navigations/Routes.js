import * as React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as ROUTE_CONSTANTS from './navigationConstants';

import CustomDrawer from './CustomDrawer';

//Screen imports
import {
  HomeScreen,
  LoginScreen,
  SignUpScreen,
  OfflineEntryScreen,
  MyNotesScreen,
  CreateNotesScreen,
  ViewDetailsScreen,
} from '../screens';

//Navigation Object
const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
const Tabs = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

//Define Routes
const MainStackNavigation = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name={ROUTE_CONSTANTS.ROUTE_MY_NOTES}
      component={MyNotesScreen}
      options={{ title: 'MyNotesScreen', headerShown: false }}
    />
    <MainStack.Screen
      name={ROUTE_CONSTANTS.ROUTE_CREATE_NOTES}
      component={CreateNotesScreen}
      options={{ title: 'CreateNotesScreen', headerShown: false }}
    />
    <MainStack.Screen
      name={ROUTE_CONSTANTS.ROUTE_VIEW_NOTE}
      component={ViewDetailsScreen}
      options={{ title: 'ViewDetailsScreen', headerShown: false }}
      initialParams={{ item: {} }}
    />
  </MainStack.Navigator>
);

const AuthStackNavigation = () => (
  <AuthStack.Navigator initialRouteName="Home">
    <AuthStack.Screen
      name={ROUTE_CONSTANTS.ROUTE_HOME}
      component={HomeScreen}
      options={{ title: 'HomeScreen', headerShown: false }}
    />
    <AuthStack.Screen
      name={ROUTE_CONSTANTS.ROUTE_SIGN_IN}
      component={LoginScreen}
      options={{ title: 'Login', headerShown: false }}
    />
    <AuthStack.Screen
      name={ROUTE_CONSTANTS.ROUTE_SIGN_UP}
      component={SignUpScreen}
      options={{ title: 'Signup', headerShown: false }}
    />
    <AuthStack.Screen
      name={ROUTE_CONSTANTS.ROUTE_OFFLINE_PIN_INPUT}
      component={OfflineEntryScreen}
      options={{ title: 'OfflineEntryScreen', headerShown: false }}
    />
  </AuthStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen
      name={ROUTE_CONSTANTS.ROUTE_HOME}
      component={MainStackNavigation}
    />
  </Tabs.Navigator>
);

const DrawerScreen = () => (
  <Drawer.Navigator
    initialRouteName={ROUTE_CONSTANTS.ROUTE_HOME}
    drawerContent={(props) => <CustomDrawer {...props} />}>
    <Drawer.Screen name={ROUTE_CONSTANTS.ROUTE_HOME} component={TabsScreen} />
    <Drawer.Screen
      name={ROUTE_CONSTANTS.ROUTE_SIGN_OUT}
      component={AuthStackNavigation}
    />
  </Drawer.Navigator>
);

const RootStackScreen = ({ isAuthenticated }) => (
  <RootStack.Navigator headerMode="none">
    {isAuthenticated ? (
      <RootStack.Screen
        name={ROUTE_CONSTANTS.ROUTE_MAIN_APP}
        component={DrawerScreen}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name={ROUTE_CONSTANTS.ROUTE_AUTH}
        component={AuthStackNavigation}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>
);

const RootNavigation = ({ isAuthenticated }) => (
  <NavigationContainer>
    <RootStackScreen isAuthenticated={isAuthenticated} />
  </NavigationContainer>
);

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(RootNavigation);
