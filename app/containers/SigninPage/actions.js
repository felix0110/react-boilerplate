import { CHANGE_USERNAME, CHANGE_PASSWORD } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export const changeUsername = username => {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} password The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_PASSWORD
 */
export const changePassword = password => {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}
