import { call, put, select, takeLatest } from 'redux-saga/effects';

import { loginRequest } from 'container/App/actions'



export function* login() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

// Individual exports for testing
export default function* signinSaga() {
  // See example in containers/HomePage/saga.js

}
