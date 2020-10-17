import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Text } from 'react-native-elements';

import Colors from '../constants/colors';

export default HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.image} source={require('../assets/AppIcon.png')} />
        <Text h1>Let's Note!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Use Offline"
          type="outline"
          raised={true}
          onPress={() => navigation.navigate('OfflineEntry')}
        />
        <Button
          title="Sign in"
          raised={true}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
      <View style={{ flex: 0.8 }}>
        <Text>Created by Frank</Text>
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
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '80%',
    flex: 3,
  },
  image: {
    height: 150,
    width: 150,
  },
});
