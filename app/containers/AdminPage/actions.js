/*
 *
 * AdminPage actions
 *
 */
import { LOAD_USERS, LOAD_USERS_SUCCESS, LOAD_USERS_ERROR } from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export const loadUsers = () => ({
  type: LOAD_USERS,
});

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {string} users The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export const userLoaded = users => ({
  type: LOAD_USERS_SUCCESS,
  users,
});

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export const userLoadingError = error => ({
  type: LOAD_USERS_ERROR,
  error,
});
