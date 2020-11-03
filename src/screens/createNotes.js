import React, { useState } from 'react';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { storeData, getData } from '../utils/asyncStorage';
import Colors from '../constants/colors';

export default create = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleCreateNote = async () => {
    const storedData = await getData('frank.savedNotes');
    const newData = storedData
      ? [...storedData, { title, desc }]
      : [{ title, desc }];
    await storeData('frank.savedNotes', newData);
    console.log('storedData', storedData); //comment
    navigation.navigate('MyNotes');
  };

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
          onChangeText={(value) => setTitle(value)}
          value={title}
        />
        <Input
          label="Description"
          placeholder="Enter Note Description"
          inputContainerStyle={{ width: wp('70%') }}
          inputStyle={{ height: hp('17%') }}
          multiline={true}
          onChangeText={(value) => setDesc(value)}
          value={desc}
        />
      </View>

      <View style={{ flex: 1, width: wp('80%') }}>
        <Button title="Save" raised={true} onPress={() => handleCreateNote()} />
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
