import { takeLatest } from 'redux-saga/effects';
import { USER_LOGIN_REQUEST } from 'containers/App/constants';
import { loginSucceed } from 'containers/App/actions';
/* import {
  makeSelectUsername,
  makeSelectPassword,
} from 'containers/SigninPage/selectors';
*/
export function* login() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const password = yield select(makeSelectPassword());
  const requestURL = `http://localhost:8080/login`;

  try {
    // Call our request helper (see 'utils/request')
    const token = yield call(request, requestURL);
    yield put(loginSucceed(token));
  } catch (err) {
    yield put(loginFailed(err));
  }
}

// Individual exports for testing
export default function* signinSaga() {
  yield takeLatest(USER_LOGIN_REQUEST, login);
  // See example in containers/HomePage/saga.js
}
