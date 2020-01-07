import { APP } from './ActionTypes';

export function initialize() {
  return {
    type: APP.INITIALIZE,
  };
}

export function initializeCompleted(payload) {
  return {
    type: APP.INITIALIZE_COMPLETED,
    payload,
  };
}

export default {
  initialize,
  initializeCompleted,
};
