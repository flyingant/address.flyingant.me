import { combineReducers } from 'redux';

import UIReducer from './UIReducer';
import AppReducer from './AppReducer';

// combine all your reducers here
const reducers = combineReducers({
  app: AppReducer,
  ui: UIReducer,
});

export default reducers;
