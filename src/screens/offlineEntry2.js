import React, { useState, useRef } from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Colors from '../constants/colors';

export default offlineEntry = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const k = 'pin'
  const PinInput = ({ pinIndex }) => {
    // const
    eval('const ' + k + pinIndex + '= ' + useRef(null));
    return (
      <TextInput
        style={{
          borderBottomWidth: 2,
          height: 50,
          width: 50,
          margin: 10,
        }}
        ref={{ [`pin${pinIndex}`]: useRef(null) }}
        keyboardType="numeric"
        textAlign="center"
        autoCompleteType="off"
        maxLength={1}
        placeholder="*"
        secureTextEntry={true}
        value={code[pinIndex]}
        onChangeText={(value) => pinInput(value, pinIndex)}
      />
    );
  };

  const pinInput = (value, pinIndex) => {
    const dumy = [...code];
    dumy[pinIndex] = value;
    setCode(dumy);
    const next = `pin${pinIndex + 1}`;
    // next.current.focus();
  };
  var k = 'value'; 
  var i = 0; 
  for(i = 1; i < 5; i++) { 
      eval('var ' + k + i + '= ' + i + ';'); 
  } 
  console.log("value1=" + value1); 
  console.log("value2=" + value2); 
  console.log("value3=" + value3); 
  console.log("value4=" + value4);
  return (
    <View style={styles.container}>
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.image} source={require('../assets/AppIcon.png')} />
        <Text h3>Unlock your Notes</Text>
      </View>
      <View
        style={{
          flex: 5,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}></View>
      <View style={{ flexDirection: 'row' }}>
        {code.map((item, index) => (
          <PinInput pinIndex={index} />
        ))}
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
    width: 100,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});
