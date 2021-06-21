/*
 *
 * AdminPage reducer
 *
 */

import produce from 'immer';
import { LOAD_USERS, LOAD_USERS_SUCCESS, LOAD_USERS_ERROR } from './constants';
// The initial state of the App
export const initialState = {
  users: {},
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const adminReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_USERS:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_USERS_SUCCESS:
        draft.loading = false;
        draft.users = action.users;
        break;

      case LOAD_USERS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default adminReducer;
