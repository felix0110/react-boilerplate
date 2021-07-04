/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  title: {
    id: `${scope}.tile`,
    defaultMessage: 'Portfolio',
  },
  features: {
    id: `${scope}.features`,
    defaultMessage: 'Features',
  },
  signin: {
    id: `${scope}.signin`,
    defaultMessage: 'Sign In',
  },
});
