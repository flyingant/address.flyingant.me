/* eslint-disable no-case-declarations */
import Immutable from 'immutable';
import moment from 'moment';
import log from '../utils/logger';
import { APP, USER, ADDRESS, ERROR } from '../actions/ActionTypes';
import { LOCALSTORAGE_KEY_FOR_CREDENTIAL } from '../constants';

const DEFAULT_APP_STATE = {
  loggedIn: false,
  loginError: false,
  loginErrorMessage: null,
  message: '',
  addressBook: [],
  error: {},
};

export default (state, action) => {
  const currentState = state || Immutable.fromJS(DEFAULT_APP_STATE);
  switch (action.type) {
    case APP.INITIALIZE_COMPLETED:
      return currentState.merge({ message: action.payload });
    case USER.AUTH_CHECK:
      // eslint-disable-next-line no-case-declarations
      const { expiry } = action.payload;
      if (expiry && moment().isBefore(new Date(expiry))) {
        return currentState.merge({ loggedIn: true });
      }
      // expired user
      localStorage.removeItem(LOCALSTORAGE_KEY_FOR_CREDENTIAL);
      return currentState.merge({ loggedIn: false });
    case USER.LOGIN_FAILED:
      const { error } = action;
      return currentState.merge({
        loggedIn: false,
        loginError: true,
        loginErrorMessage: error.message,
      });
    case USER.LOGIN_COMPLETED:
      return currentState.merge({
        loggedIn: true,
        loginError: false,
        loginErrorMessage: null,
      });
    case ADDRESS.LOAD_ADDRESS_COMPLETED:
      return currentState.merge({
        addressBook: action.payload,
      });
    case USER.LOGOUT_COMPLETED:
      return currentState.merge({ loggedIn: false });
    case ERROR.POPUP_ERROR:
      log('Error:', action.payload);
      return currentState.merge({ error: action.payload });
    case ERROR.DISMISS_ERROR:
      return currentState.merge({ error: {} });
    default:
      return currentState;
  }
};
