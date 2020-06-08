import { put, call, takeEvery } from 'redux-saga/effects';
import { APP, USER, ADDRESS } from '../actions/ActionTypes';
import { initializeCompleted } from '../actions/AppActions';
import { busy, busyCompleted } from '../actions/UIActions';
import { popupError } from '../actions/ErrorActions';
import { loginFailed, loginCompleted, logoutCompleted } from '../actions/UserActions';
import { loadAddressCompleted } from '../actions/AddressActions';
import { loadAddressBook, login } from '../apis/app';
import { LOCALSTORAGE_KEY_FOR_CREDENTIAL } from '../constants';

function* handleInitialize() {
  try {
    yield put(busy());
    yield call(login, { username: 'awkae-function', password: 'awkae-function' });
    yield put(initializeCompleted());
    yield put(busyCompleted());
  } catch (e) {
    yield put(
      popupError({
        message: 'Failed to initialize the app',
        event: e,
      })
    );
    yield put(busyCompleted());
  }
}

function* handleUserLogin(action) {
  try {
    yield put(busy());
    const { username, password } = action.payload;
    const results = yield call(login, { username, password });
    if (results.data.success) {
      localStorage.setItem(
        LOCALSTORAGE_KEY_FOR_CREDENTIAL,
        JSON.stringify({
          username,
          expiry: +new Date(new Date().valueOf() + 1000 * 3600 * 24 * 2),
        })
      );
      yield put(loginCompleted());
    } else {
      yield put(
        loginFailed({
          message: 'Failed to login',
        })
      );
    }
    yield put(busyCompleted());
  } catch (e) {
    yield put(
      popupError({
        message: 'Failed to log in',
        event: e,
      })
    );
    yield put(busyCompleted());
  }
}

function* handleUserLogout() {
  try {
    yield put(busy());
    localStorage.removeItem(LOCALSTORAGE_KEY_FOR_CREDENTIAL);
    yield put(logoutCompleted());
    yield put(busyCompleted());
  } catch (e) {
    yield put(busyCompleted());
  }
}

function* handleLoadAddress() {
  try {
    yield put(busy());
    const results = yield call(loadAddressBook);
    yield put(loadAddressCompleted(results.data.data));
    yield put(busyCompleted());
  } catch (e) {
    yield put(
      popupError({
        message: 'Failed to load address!',
        event: e,
      })
    );
    yield put(busyCompleted());
  }
}

export default function* root() {
  yield takeEvery(APP.INITIALIZE, handleInitialize);
  yield takeEvery(USER.LOGIN, handleUserLogin);
  yield takeEvery(USER.LOGOUT, handleUserLogout);
  yield takeEvery(ADDRESS.LOAD_ADDRESS, handleLoadAddress);
}
