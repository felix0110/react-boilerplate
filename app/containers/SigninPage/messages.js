/*
 * Signin Messages
 *
 * This contains all the text for the Signin container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Signin';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Signin container!',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Username or Email',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Password',
  },
  rememberme: {
    id: `${scope}.rememberme`,
    defaultMessage: 'Remember me',
  },
  signin: {
    id: `${scope}.signin`,
    defaultMessage: 'Sign in',
  },
  forgotpassword: {
    id: `${scope}.forgotpassword`,
    defaultMessage: 'Forgot password?',
  },
  tosignup: {
    id: `${scope}.tosignup`,
    defaultMessage: "Don't have an account? Sign Up",
  },
});
