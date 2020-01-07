import { ENABLE_DEBUGGER_MESSAGE } from '../constants';

const log = (...args) => ENABLE_DEBUGGER_MESSAGE && console.log(...args);
export default log;
