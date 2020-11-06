import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default PINInput = ({ PIN, setPIN }) => {
  return (
    <TextInput
      style={{
        borderBottomWidth: 2,
        margin: 10,
      }}
      keyboardType="numeric"
      textAlign="center"
      autoCompleteType="off"
      maxLength={4}
      placeholder="****"
      secureTextEntry={true}
      value={PIN}
      onChangeText={(value) => setPIN(value)}
    />
  );
};
