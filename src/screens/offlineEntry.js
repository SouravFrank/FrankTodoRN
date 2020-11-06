import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import { Button, Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';

import * as actions from '../redux/actions';
import { MyButton, PINInput } from '../components';
import * as ROUTE_CONSTANTS from '../navigations/navigationConstants';
import { storeData, getData, removeValue } from '../utils/asyncStorage';
import Colors from '../constants/colors';

const offlineEntry = ({ navigation, isAuthenticated, onAuth }) => {
  const [code, setCode] = useState();
  const [savedPIN, setSavedPIN] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  const pinCheck = async () => {
    const offlinePIN = await getData('offlinePIN');
    setSavedPIN(offlinePIN);
  };

  const updateInput = (value) => {
    setCode(value);
    value.length === 4 && Keyboard.dismiss();
  };

  const savePIN = async () => {
    await storeData('offlinePIN', code);
    onAuth();
  };

  const verifyPIN = () => {
    if (savedPIN === code) {
      onAuth();
    } else {
      console.log('Error log in');
    }
  };

  const cleanStorage = async () => {
    await removeValue('offlinePIN');
    await removeValue('frank.savedNotes');
  };

  useEffect(() => {
    pinCheck();
    setisLoading(false);
  }, [savedPIN]);

  isAuthenticated && navigation.navigate(ROUTE_CONSTANTS.ROUTE_MY_NOTES);

  return isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  ) : (
    <View style={styles.container}>
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.image} source={require('../assets/AppIcon.png')} />
        {savedPIN ? (
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
        <View style={{ flex: 2, width: wp('80%') }}>
          <MyButton
            title={savedPIN ? 'Unlock' : 'Save PIN'}
            mode="contained"
            onPress={savedPIN ? () => verifyPIN() : () => savePIN()}
          />

          <TouchableOpacity onPress={() => cleanStorage()}>
            <Text
              style={{
                margin: 20,
                alignSelf: 'stretch',
                textAlign: 'center',
                color: '#ca2019',
              }}>
              Clean Storage
            </Text>
          </TouchableOpacity>
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

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated ? true : false,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: () => dispatch(actions.authUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(offlineEntry);
