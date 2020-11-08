import * as React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ROUTE_CONSTANTS from './navigationConstants';
import CustomDrawer from './CustomDrawer';
import Colors from '../constants/colors';

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
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

//Define Routes
const MainStackNavigation = () => (
  <MainStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: 'transparent' },
      gestureEnabled: true,
      
    }}
    mode="modal">
    <MainStack.Screen
      name={ROUTE_CONSTANTS.ROUTE_MY_NOTES}
      component={MyNotesScreen}
    />
    <MainStack.Screen
      name={ROUTE_CONSTANTS.ROUTE_CREATE_NOTES}
      component={CreateNotesScreen}
    />
    <MainStack.Screen
      name={ROUTE_CONSTANTS.ROUTE_VIEW_NOTE}
      component={ViewDetailsScreen}
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
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: Colors.primary,
    }}>
    <Tab.Screen
      name={ROUTE_CONSTANTS.ROUTE_MY_NOTES}
      component={MainStackNavigation}
      options={{
        tabBarLabel: 'My Notes',
        tabBarIcon: ({ color, size }) => (
          <Icon name="feather" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name={ROUTE_CONSTANTS.ROUTE_MY_TASKS}
      component={MainStackNavigation}
      options={{
        tabBarLabel: 'My Tasks',
        tabBarIcon: ({ color, size }) => (
          <Icon name="ballot-outline" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name={ROUTE_CONSTANTS.ROUTE_MY_PROFILE}
      component={MainStackNavigation}
      options={{
        tabBarLabel: 'My Profile',
        tabBarIcon: ({ color, size }) => (
          <Icon name="account-outline" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

const DrawerScreen = () => (
  <Drawer.Navigator
    initialRouteName={ROUTE_CONSTANTS.ROUTE_HOME}
    drawerContentOptions={{
      activeTintColor: Colors.primary,
      inactiveTintColor: Colors.accent,
    }}
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
