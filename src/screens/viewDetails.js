import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Colors from '../constants/colors';

export default viewDetails = ({ navigation, route }) => {
  const { title, description } = route.params.item;
  console.log("here I am");
  return (
    <View style={styles.container}>
      <View
        style={{
          borderRadius: 5,
          borderWidth: 1,
          margin: 10,
          elevation: 4,
          justifyContent: 'space-between',
          shadowOffset: 10,
          shadowColor: '#55a',
          alignItems: 'stretch',
          flex: 1,
        }}>
        <View style={{ margin: 5, alignItems: 'stretch', flex: 1 }}>
          <Text>{title}</Text>
          <Text>{description}</Text>
        </View>
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});
