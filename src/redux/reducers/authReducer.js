import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isAuthenticated: null,
};

const authUser = (state) => {
  return { ...state, isAuthenticated: true };
};

const removeAuthUser = (state) => {
  return { ...state, isAuthenticated: false };
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_USER:
      return authUser(state);
    case actionTypes.REMOVE_AUTH_USER:
      return removeAuthUser(state);
    default:
      return state;
  }
};
