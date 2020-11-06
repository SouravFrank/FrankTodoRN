import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { useIsFocused } from '@react-navigation/native';
import { connect } from 'react-redux';

import * as ROUTE_CONSTANTS from '../navigations/navigationConstants';
import * as actions from '../redux/actions';
import Colors from '../constants/colors';

const HomeScreen = ({ navigation, removeAuth }) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    removeAuth();
  }, [isFocused]);

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
          onPress={() =>
            navigation.navigate(ROUTE_CONSTANTS.ROUTE_OFFLINE_PIN_INPUT)
          }
        />
        <Button
          title="Sign in"
          raised={true}
          onPress={() => navigation.navigate(ROUTE_CONSTANTS.ROUTE_SIGN_IN)}
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

const mapDispatchToProps = (dispatch) => {
  return {
    removeAuth: () => dispatch(actions.removeAuthUser()),
  };
};

export default connect(null, mapDispatchToProps)(HomeScreen);
