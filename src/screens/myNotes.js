import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import { Text } from 'react-native-elements';

// import { AddNoteButton } from '../components/AddNoteButton';
import Colors from '../constants/colors';

import dummyData from '../data/dummyData';

export default MyNotesScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableNativeFeedback
        onPress={() =>
          navigation.navigate('ViewDetails', {
            item,
          })
        }>
        <View
          style={{
            borderRadius: 5,
            borderWidth: 1,
            margin: 10,
            elevation: 4,
            justifyContent: 'space-between',
            shadowOffset: 10,
            shadowColor: '#55a',
            alignItems: 'stretch',
            flex: 1,
          }}>
          <View style={{ margin: 5, alignItems: 'stretch', flex: 1 }}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  };

  const AddNoteButton = ({ onPress }) => {
    return (
      <View style={styles.MainContainer}>
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
          <Image
            source={{
              uri:
                'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png',
            }}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>My Tasks</Text>
      <FlatList
        data={dummyData}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
      <AddNoteButton onPress={() => navigation.navigate('CreateNotes')} />
      {/* <AddNoteButton onPress={() => alert('hello called me?')} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 50,
    height: 50,
    right: 30,
    bottom: 30,
  },
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
});
