import React from 'react';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Colors from '../constants/colors';

export default create = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.image} source={require('../assets/AppIcon.png')} />
        <Text h4>Create New Note!</Text>
      </View>

      <View style={{ flex: 2, justifyContent: 'center', marginVertical: 50 }}>
        <Input
          label="Title"
          placeholder="Enter Note Title"
          inputContainerStyle={{ width: wp('70%') }}
        />
        <Input
          label="Description"
          placeholder="Enter Note Description"
          inputContainerStyle={{ width: wp('70%') }}
          inputStyle={{ height: hp('17%') }}
          multiline={true}
        />
      </View>

      <View style={{ flex: 1, width: wp('80%') }}>
        <Button
          title="Save"
          raised={true}
          onPress={() => navigation.navigate('MyNotes')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  image: {
    height: 50,
    width: 50,
  },
});
