import Immutable from 'immutable';
import { UI } from '../actions/ActionTypes';

const DEFAULT_UI_STATE = {
  loading: false,
};

export default (state, action) => {
  const currentState = state || Immutable.fromJS(DEFAULT_UI_STATE);
  switch (action.type) {
    case UI.BUSY:
      return currentState.merge({ loading: true });
    case UI.BUSY_COMPLETED:
      return currentState.merge({ loading: false });
    default:
      return currentState;
  }
};
