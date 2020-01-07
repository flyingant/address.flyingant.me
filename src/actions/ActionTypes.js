const createActionTypes = (args) => {
  const obj = {};
  let i = args.length;
  // eslint-disable-next-line no-plusplus
  while (i--) {
    obj[args[i]] = args[i];
  }
  return obj;
};

export const APP = createActionTypes(['INITIALIZE', 'INITIALIZE_COMPLETED']);

export const UI = createActionTypes(['BUSY', 'BUSY_COMPLETED']);

export const USER = createActionTypes(['AUTH_CHECK', 'LOGIN', 'LOGOUT', 'LOGIN_COMPLETED', 'LOGIN_FAILED', 'LOGOUT_COMPLETED']);

export const ADDRESS = createActionTypes(['LOAD_ADDRESS', 'LOAD_ADDRESS_COMPLETED']);
