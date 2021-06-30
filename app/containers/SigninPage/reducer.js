/*
 *
 * Signin reducer
 *
 */
import produce from 'immer';
import { CHANGE_PASSWORD, CHANGE_USERNAME, SET_TOKEN } from './constants';

export const initialState = {
  username: '',
  password: '',
  token: ''
};

/* eslint-disable default-case, no-param-reassign */
const signinReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        draft.username = action.username;
        break;
      case CHANGE_PASSWORD:
        draft.password = action.password;
        break;
      case SET_TOKEN:
        draft.token = action.token;
    }
  });

export default signinReducer;
