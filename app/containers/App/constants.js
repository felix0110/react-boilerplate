/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';


export const USER_LOGIN_REQUEST = 'boilerplate/App/USER_LOGIN_REQUEST'
export const USER_LOGIN_SUCCESS = 'boilerplate/App/USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAIL = 'boilerplate/App/USER_LOGIN_FAIL'
export const USER_LOGOUT = 'boilerplate/App/USER_LOGOUT'

export const USER_REGISTER_REQUEST = 'boilerplate/App/USER_REGISTER_REQUEST'
export const USER_REGISTER_SUCCESS = 'boilerplate/App/USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAIL = 'boilerplate/App/USER_REGISTER_FAIL'

export const USER_DETAILS_REQUEST = 'boilerplate/App/USER_DETAILS_REQUEST'
export const USER_DETAILS_SUCCESS = 'boilerplate/App/USER_DETAILS_SUCCESS'
export const USER_DETAILS_FAIL = 'boilerplate/App/USER_DETAILS_FAIL'
export const USER_DETAILS_RESET = 'boilerplate/App/USER_DETAILS_RESET'

export const USER_UPDATE_PROFILE_REQUEST = 'boilerplate/App/USER_UPDATE_PROFILE_REQUEST'
export const USER_UPDATE_PROFILE_SUCCESS = 'boilerplate/App/USER_UPDATE_PROFILE_SUCCESS'
export const USER_UPDATE_PROFILE_FAIL = 'boilerplate/App/USER_UPDATE_PROFILE_FAIL'
export const USER_UPDATE_PROFILE_RESET = 'boilerplate/App/USER_UPDATE_PROFILE_RESET'

export const USER_LIST_REQUEST = 'boilerplate/App/USER_LIST_REQUEST'
export const USER_LIST_SUCCESS = 'boilerplate/App/USER_LIST_SUCCESS'
export const USER_LIST_FAIL = 'boilerplate/App/USER_LIST_FAIL'
export const USER_LIST_RESET = 'boilerplate/App/USER_LIST_RESET'

export const USER_DELETE_REQUEST = 'boilerplate/App/USER_DELETE_REQUEST'
export const USER_DELETE_SUCCESS = 'boilerplate/App/USER_DELETE_SUCCESS'
export const USER_DELETE_FAIL = 'boilerplate/App/USER_DELETE_FAIL'

export const USER_UPDATE_REQUEST = 'boilerplate/App/USER_UPDATE_REQUEST'
export const USER_UPDATE_SUCCESS = 'boilerplate/App/USER_UPDATE_SUCCESS'
export const USER_UPDATE_FAIL = 'boilerplate/App/USER_UPDATE_FAIL'
export const USER_UPDATE_RESET = 'boilerplate/App/USER_UPDATE_RESET'