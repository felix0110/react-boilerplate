/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_USERS } from 'containers/AdminPage/constants';
import { userLoaded, userLoadingError } from 'containers/AdminPage/actions';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getUsers() {
  const requestURL = `https://felix-node-server.herokuapp.com/api/users`;

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, {
      headers: {
        Authorization: 'Basic YnJ1Y2U6MTIzNA==',
      },
    });
    yield put(userLoaded(response));
  } catch (err) {
    yield put(userLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* reloadUser() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_USERS, getUsers);
}
