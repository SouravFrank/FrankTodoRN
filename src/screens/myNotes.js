import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import * as ROUTE_CONSTANTS from '../navigations/navigationConstants';
import * as actions from '../redux/actions';

import Colors from '../constants/colors';
import MyCard from '../components/MyCard';

import dummyData from '../data/dummyData';

const MyNotesScreen = ({ navigation, savedNotes, onLoadMyNotes }) => {
  const isFocused = useIsFocused();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log('clicked');
          navigation.navigate(ROUTE_CONSTANTS.ROUTE_VIEW_NOTE, {
            item,
          });
        }}>
        <MyCard title={item.title} description={item.description} />
      </TouchableOpacity>
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

  useEffect(() => {
    onLoadMyNotes();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 40,
        }}>
        <Image
          style={{ height: 40, width: 40, marginRight: 10 }}
          source={require('../assets/AppIcon.png')}
        />
        <Text h3>It's my Notes!</Text>
      </View>
      <View style={{ marginBottom: 20 }}>
        {savedNotes && savedNotes.length ? (
          <FlatList
            data={savedNotes}
            renderItem={renderItem}
            keyExtractor={(item) => item.title}
          />
        ) : (
          <Text style={{textAlign: "center", color: Colors.color2}}>No saved Notes. Create some new.</Text>
        )}
      </View>
      <AddNoteButton
        onPress={() => navigation.navigate(ROUTE_CONSTANTS.ROUTE_CREATE_NOTES)}
      />
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

const mapStateToProps = (state) => {
  return {
    // isAuthenticated: state.auth.isAuthenticated ? true : false,
    savedNotes: state.notes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadMyNotes: () => actions.loadMyNotes(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyNotesScreen);
