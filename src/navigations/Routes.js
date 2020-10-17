import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../screens/home';
import LoginScreen from '../screens/login';
import SignUpScreen from '../screens/signUp';
import OfflineEntryScreen from '../screens/offlineEntry';
import MyNotesScreen from '../screens/myNotes';
import CreateNotesScreen from '../screens/createNotes';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export const StackNavigation = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: 'HomeScreen', headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ title: 'Login', headerShown: false }}
    />
    <Stack.Screen
      name="Signup"
      component={SignUpScreen}
      options={{ title: 'Signup', headerShown: false }}
    />
    <Stack.Screen
      name="OfflineEntry"
      component={OfflineEntryScreen}
      options={{ title: 'OfflineEntryScreen' }}
    />
    <Stack.Screen
      name="MyNotes"
      component={MyNotesScreen}
      options={{ title: 'MyNotesScreen' }}
    />
    <Stack.Screen
      name="CreateNotes"
      component={CreateNotesScreen}
      options={{ title: 'CreateNotesScreen' }}
    />
  </Stack.Navigator>
);

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

// export const DrawerNavigation = ()=> (

// )
