import { ERROR } from './ActionTypes';

export function popupError(payload) {
  return {
    type: ERROR.POPUP_ERROR,
    payload,
  };
}

export function dismissError() {
  return {
    type: ERROR.DISMISS_ERROR,
  };
}

export default {
  popupError,
  dismissError,
};
