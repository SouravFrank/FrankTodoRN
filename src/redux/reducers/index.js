import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { notesReducer } from './notesReducer';

export default Reducer = combineReducers({
  notes: notesReducer,
  auth: authReducer,
});
