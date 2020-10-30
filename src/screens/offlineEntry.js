import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Keyboard } from 'react-native';
import { Button, Text } from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { PINInput } from '../components/PINInput';
import { storeData, getData } from '../utils/asyncStorage';
import Colors from '../constants/colors';

export default offlineEntry = ({ navigation }) => {
  const [code, setCode] = useState();
  const [oldUser, setOldUser] = useState(false);

  const pinCheck = async () => {
    const offlinePIN = await getData('offlinePIN');
    offlinePIN && setOldUser(true);
  };

  const updateInput = (value) =>{
    setCode(value)
    value.length===4 && Keyboard.dismiss()
  }

  useEffect(() => {
    pinCheck();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.image} source={require('../assets/AppIcon.png')} />
        {oldUser ? (
          <Text h3>Unlock your Notes</Text>
        ) : (
          <Text h3>Set New PIN</Text>
        )}
      </View>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
        <View style={{ flex: 1, width: wp('40%') }}>
          <PINInput PIN={code} setPIN={updateInput} />
        </View>
        <View style={{ flex: 1, width: wp('80%') }}>
          <Button
            title={oldUser ? 'Unlock' : 'Save PIN'}
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
