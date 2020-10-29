import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';


import Colors from '../constants/colors';


export default SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SignUpScreen</Text>
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});
