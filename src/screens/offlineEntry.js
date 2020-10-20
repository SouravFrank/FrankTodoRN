import React, { useState, useRef } from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Colors from '../constants/colors';

export default offlineEntry = () => {

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
            }}>

                
            </View>
          
        </View>
      );
}

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