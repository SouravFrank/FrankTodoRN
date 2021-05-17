import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import {PageHeader } from '../components';
import PropTypes from 'prop-types';
import Colors from '../constants/colors';

const MyProfileScreen = ({ navigation, savedNotes, onLoadMyNotes }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <PageHeader
          title="My Notes!"
          leftIcon="menu"
          wave="wave5"
          onPress={() => navigation.toggleDrawer()}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '80%',
    },
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: 50,
      height: 50,
      right: 30,
      bottom: 30,
    },
  });

// MyProfile.propTypes = {

// };

export default MyProfileScreen;
