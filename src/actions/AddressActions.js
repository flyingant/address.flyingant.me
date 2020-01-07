import { ADDRESS } from './ActionTypes';

export function loadAddress() {
  return {
    type: ADDRESS.LOAD_ADDRESS,
  };
}

export function loadAddressCompleted(payload) {
  return {
    type: ADDRESS.LOAD_ADDRESS_COMPLETED,
    payload,
  };
}

export default {
  loadAddress,
  loadAddressCompleted,
};
