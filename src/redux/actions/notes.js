import { getData, storeData } from '../../utils/asyncStorage';
import * as actionTypes from './actionTypes';

export const loadMyNotes = async (dispatch) => {
  const savedNotes = await getData('frank.savedNotes');
  dispatch({
    type: actionTypes.MY_NOTES,
    value: savedNotes,
  });
};

export const deleteNote = async (dispatch, title) => {
  const savedNotes = await getData('frank.savedNotes');
  const newNotes = savedNotes.filter((note) => {
    return note.title !== title;
  });
  await storeData('frank.savedNotes', newNotes);
  loadMyNotes(dispatch);
};

export const editNote = async (dispatch, editTitle, editDescription, title) => {
  const savedNotes = await getData('frank.savedNotes');
  const index = savedNotes.findIndex((item) => item.title === title);
  savedNotes[index] = { title: editTitle, description: editDescription };
  await storeData('frank.savedNotes', savedNotes);
  loadMyNotes(dispatch);
};
