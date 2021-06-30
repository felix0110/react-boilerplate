import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signin state domain
 */

const selectSignin = state => state.signin || initialState;


const makeSelectUsername = () =>
  createSelector(
    selectSignin,
    signinState => signinState.username,
  );

const makeSelectPassword = () =>
  createSelector(
    selectSignin,
    signinState => signinState.password,
  );

const makeSelectToken = () =>
  createSelector(selectSignin, signinState => signinState.token);

export { selectSignin, makeSelectPassword, makeSelectUsername, makeSelectToken };


