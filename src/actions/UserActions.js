import { USER } from './ActionTypes';

export function login(payload) {
  return {
    type: USER.LOGIN,
    payload,
  };
}

export function logout() {
  return {
    type: USER.LOGOUT,
  };
}

export function loginCompleted() {
  return {
    type: USER.LOGIN_COMPLETED,
  };
}

export function loginFailed(error) {
  return {
    type: USER.LOGIN_FAILED,
    error,
  };
}

export function logoutCompleted() {
  return {
    type: USER.LOGOUT_COMPLETED,
  };
}

export default {
  login,
  logout,
  loginCompleted,
  loginFailed,
  logoutCompleted,
};
