import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isAuthenticated: null,
};

const authUser = (state) => {
  return { ...state, isAuthenticated: true };
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_USER:
      return authUser(state);
    default:
      return state;
  }
};
