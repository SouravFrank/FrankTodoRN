import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import * as ROUTE_CONSTANTS from '../navigations/navigationConstants';
import * as actions from '../redux/actions';

import { MyCard, PageHeader, AddNew, NothingSaved } from '../components';
import Colors from '../constants/colors';

// import dummyData from '../data/dummyData';

const MyNotesScreen = ({ navigation, savedNotes, onLoadMyNotes }) => {
  const isFocused = useIsFocused();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          
          navigation.navigate(ROUTE_CONSTANTS.ROUTE_VIEW_NOTE, {
            item,
          });
        }}>
        <MyCard title={item.title} description={item.description} />
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    onLoadMyNotes();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <PageHeader
          title="My Notes!"
          leftIcon="menu"
          wave="wave1"
          onPress={() => navigation.toggleDrawer()}
        />
      </View>
      <View style={{ flex: 2.9, marginBottom: 20 }}>
        {savedNotes && savedNotes.length ? (
          <FlatList
            data={savedNotes}
            renderItem={renderItem}
            keyExtractor={(item) => item.title}
          />
        ) : (
          <NothingSaved title="Notes" />
        )}
      </View>
      <View style={styles.MainContainer}>
        <AddNew
          onPress={() =>
            navigation.navigate(ROUTE_CONSTANTS.ROUTE_CREATE_NOTES)
          }
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
