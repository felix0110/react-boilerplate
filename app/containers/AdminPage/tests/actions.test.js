import { loadUsers, userLoadingError, userLoaded } from '../actions';
import { LOAD_USERS, LOAD_USERS_SUCCESS, LOAD_USERS_ERROR } from '../constants';

describe('AdminPage actions', () => {
  describe('loadUsers', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_USERS,
      };
      expect(loadUsers()).toEqual(expectedResult);
    });
  });

  describe('userLoaded', () => {
    it('should return the correct type and the passed users', () => {
      const users = ['test', 'test2'];
      const expectedResult = {
        type: LOAD_USERS_SUCCESS,
        users,
      };

      expect(userLoaded(users)).toEqual(expectedResult);
    });
  });

  describe('repoLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_USERS_ERROR,
        error: fixture,
      };

      expect(userLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
