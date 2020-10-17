import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Colors from '../constants/colors';

export default offlineEntry = () => {
  const [code, setCode] = useState({});
  return (
    <Text>Enjoy</Text>
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
