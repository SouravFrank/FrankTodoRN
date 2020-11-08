import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native-animatable';
import {
  useTheme,
  Avatar,
  Title,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  Caption,
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CreatedByFrank from '../components/CreatedByFrank';
import * as ROUTE_CONSTANTS from './navigationConstants';
import { version } from '../../package.json';

export default CustomDrawer = (props) => {
  const paperTheme = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={require('../assets/AppIcon.png')}
                size={50}
              />
              <View style={styles.appName}>
                <Title style={styles.title}>Let's Note</Title>
              </View>
              <Caption>v {version}</Caption>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="feather" color={color} size={size} />
              )}
              label="My Notes"
              onPress={() => {
                props.navigation.navigate(ROUTE_CONSTANTS.ROUTE_HOME);
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="ballot-outline" color={color} size={size} />
              )}
              label="My Tasks"
              //   onPress={() => {
              //     props.navigation.navigate('Home');
              //   }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="My Profile"
              //   onPress={() => {
              //     props.navigation.navigate('Profile');
              //   }}
            />
          </Drawer.Section>

          <Drawer.Section title="Preferences">
            <TouchableRipple
            // onPress={() => {
            //   toggleTheme();
            // }}
            >
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <View style={{ alignSelf: 'center' }}>
        <CreatedByFrank />
      </View>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            props.navigation.navigate(ROUTE_CONSTANTS.ROUTE_SIGN_OUT);
          }}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 22,
    marginTop: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  appName: {
    marginLeft: 15,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
