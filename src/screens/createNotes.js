import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { storeData, getData } from '../utils/asyncStorage';
import * as ROUTE_CONSTANTS from '../navigations/navigationConstants';
// import { MyButton } from '../components';
import Colors from '../constants/colors';

export default CreateNote = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');

  const handleCreateNote = async () => {
    const storedData = await getData('frank.savedNotes');
    const newData = storedData
      ? [...storedData, { title, description }]
      : [{ title, description }];
    await storeData('frank.savedNotes', newData);
    navigation.navigate(ROUTE_CONSTANTS.ROUTE_MY_NOTES);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <PageHeader
          title="Create your Note!"
          leftIcon="backburger"
          wave="wave2"
          onPress={() => navigation.pop()}
        />
      </View>

      <View style={styles.inputContainer}>
        <Input
          label="Title"
          placeholder="Enter Note Title"
          onChangeText={(value) => setTitle(value)}
          value={title}
        />
        <Input
          label="Description"
          placeholder="Enter Note Description"
          inputStyle={{ height: hp('17%') }}
          multiline={true}
          onChangeText={(value) => setDesc(value)}
          value={description}
        />
      </View>

      <View style={styles.buttonContainer}>
        <MyButton
          title="Save"
          mode="contained"
          onPress={() => handleCreateNote()}
        />
        <MyButton
          title="Cancel"
          mode="outlined"
          onPress={() => navigation.pop()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  inputContainer: {
    flex: 2.1,
    marginTop: 20,
    marginHorizontal: 10,
  },
  buttonContainer: {
    flex: 0.8,
    width: '80%',
    marginHorizontal: '10%',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
});
