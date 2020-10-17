import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Field, reduxForm } from 'redux-form'

import Colors from '../constants/colors';

export default LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.image} source={require('../assets/AppIcon.png')} />
        <Text h3>Sign in to Let's Note!</Text>
      </View>
      <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  image: {
    height: 100,
    width: 100
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});
