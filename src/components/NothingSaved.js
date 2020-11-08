import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-elements';

export default NothingSaved = ({ title }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/empty.png')} />
      <Text style={styles.text1}>No {title} Saved !!</Text>
      <Text style={styles.text2}>Create some new</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20%'
  },
  image: {
    height: 150,
    width: 150,
    opacity: 0.4,
  },
  text1: {
    fontSize: 18,
    fontWeight: 'bold',
    opacity: 0.4,
  },
  text2: {
    fontSize: 14,
    opacity: 0.4,
  },
});
