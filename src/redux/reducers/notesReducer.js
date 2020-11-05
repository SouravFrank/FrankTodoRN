import * as actionTypes from '../actions/actionTypes';

const initialState = {
  savedNotes: [],
};

const getNotes = async () => {
  return savedNotes;
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MY_NOTES:
      return action.value;
    default:
      return state;
  }
};
