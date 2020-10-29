import React, { useState, useRef } from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Colors from '../constants/colors';

export default offlineEntry = ({ navigation }) => {
  const [code, setCode] = useState(['', '', '', '']);
  // const k = 'pin';
  const PinInput = ({ pinIndex }) => {
    // eval('const ' + k + pinIndex + '= ' + useRef(null));
    return (
      <TextInput
        style={{
          borderBottomWidth: 2,
          height: 50,
          width: 50,
          margin: 10,
        }}
        // ref={{ [`pin${pinIndex}`]: useRef(null) }}
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
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
        <View style={{ flexDirection: 'row' }}>
          {code.map((item, index) => (
            <PinInput pinIndex={index} />
          ))}
        </View>
        <View style={{ flex: 2 }}>
          <Button
            title="Unlock"
            raised={true}
            onPress={() => navigation.navigate('MyNotes')}
          />
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
