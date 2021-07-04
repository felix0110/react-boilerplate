import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the LandingPage state domain
 */

const selectLandingPageDomain = state => state.LandingPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LandingPage
 */

const makeSelectLandingPage = () =>
  createSelector(
    selectLandingPageDomain,
    substate => substate,
  );

export default makeSelectLandingPage;
export { selectLandingPageDomain };
