import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';

import Colors from '../constants/colors';

export default HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/AppIcon.png')} />
      <View style={styles.buttonContainer}>
        <Button
          title="Use Offline"
          type="outline"
          raised={true}
          onPress={() => console.log('me')}
        />
        <Button
          title="Sign in"
          raised={true}
          onPress={() => navigation.navigate('Login')}
        />
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  image: {
    height: 50,
    width: 50,
  },
});
