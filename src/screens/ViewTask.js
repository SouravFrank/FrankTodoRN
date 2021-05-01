import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';

import * as ROUTE_CONSTANTS from '../navigations/navigationConstants';
import * as actions from '../redux/actions';
import { MyButton } from '../components';
import Colors from '../constants/colors';

const ViewTask = ({ navigation, route, onDeleteNote, onEditNote }) => {
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
      <View style={{ flex: 1 }}>
        <PageHeader
          title={title}
          leftIcon="backburger"
          wave="wave3"
          onPress={() => navigation.pop()}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          label="Title"
          placeholder="Enter Note Title"
          onChangeText={(value) => setEditTitle(value)}
          value={editTitle}
        />
        <Input
          label="Description"
          placeholder="Enter Note Description"
          inputStyle={{ height: hp('17%') }}
          multiline={true}
          onChangeText={(value) => setEditDescription(value)}
          value={editDescription}
        />
      </View>
      <View style={styles.buttonContainer}>
        <MyButton
          title="Update"
          mode="outlined"
          raised={true}
          onPress={() => handleUpdate()}
        />
        <MyButton
          title="Delete"
          raised={true}
          mode="contained"
          onPress={() => handleDelete()}
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

export default connect(null, mapDispatchToProps)(ViewTask);
