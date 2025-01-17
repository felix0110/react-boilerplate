import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the adminPage state domain
 */

const selectAdminPageDomain = state => state.adminPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AdminPage
 */

const makeSelectAdminPage = () =>
  createSelector(
    selectAdminPageDomain,
    adminState => adminState.users,
  );

export default makeSelectAdminPage;
export { selectAdminPageDomain };
