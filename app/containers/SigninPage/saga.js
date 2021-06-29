import { takeLatest } from 'redux-saga/effects';
import { USER_LOGIN_REQUEST } from 'containers/App/constants';
// import { loginRequest } from 'container/App/actions';
/* import {
  makeSelectUsername,
  makeSelectPassword,
} from 'containers/SigninPage/selectors';
*/
export function* login() {
  // Select username from store
  // const username = yield select(makeSelectUsername());
  // const password = yield select(makeSelectPassword());
  // const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    // const repos = yield call(request, requestURL);
    //  yield put(reposLoaded(repos, username));
  } catch (err) {
    // yield put(repoLoadingError(err));
  }
}

// Individual exports for testing
export default function* signinSaga() {
  yield takeLatest(USER_LOGIN_REQUEST, login);
  // See example in containers/HomePage/saga.js
}
