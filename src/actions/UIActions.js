import { UI } from './ActionTypes';

export function busy() {
  return {
    type: UI.BUSY,
  };
}

export function busyCompleted() {
  return {
    type: UI.BUSY_COMPLETED,
  };
}

export default {
  busy,
  busyCompleted,
};
