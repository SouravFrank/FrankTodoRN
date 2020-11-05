import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';

import * as ROUTE_CONSTANTS from '../navigations/navigationConstants';
import * as actions from '../redux/actions';
import Colors from '../constants/colors';

const ViewDetails = ({ navigation, route, onDeleteNote, onEditNote }) => {
  const { title, description } = route.params.item;
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);

  const handleDelete = () => {
    onDeleteNote(title);
    navigation.navigate(ROUTE_CONSTANTS.ROUTE_MY_NOTES);
  };

  const handleUpdate = () => {
    onEditNote(editTitle, editDescription, title);
    navigation.navigate(ROUTE_CONSTANTS.ROUTE_MY_NOTES);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 2, justifyContent: 'center', marginVertical: 50 }}>
        <Input
          label="Title"
          placeholder="Enter Note Title"
          inputContainerStyle={{ width: wp('70%') }}
          onChangeText={(value) => setEditTitle(value)}
          value={editTitle}
        />
        <Input
          label="Description"
          placeholder="Enter Note Description"
          inputContainerStyle={{ width: wp('70%') }}
          inputStyle={{ height: hp('17%') }}
          multiline={true}
          onChangeText={(value) => setEditDescription(value)}
          value={editDescription}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Update"
          type="outline"
          raised={true}
          onPress={() => handleUpdate()}
        />
        <Button title="Delete" raised={true} onPress={() => handleDelete()} />
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
    flex: 1,
    paddingVertical: 20,
  },
});

// const mapStateToProps = (state) => {
//   return {
//     // isAuthenticated: state.auth.isAuthenticated ? true : false,
//     savedNotes: state.notes,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteNote: (title) => actions.deleteNote(dispatch, title),
    onEditNote: (editTitle, editDescription, title) =>
      actions.editNote(dispatch, editTitle, editDescription, title),
  };
};

export default connect(null, mapDispatchToProps)(ViewDetails);
