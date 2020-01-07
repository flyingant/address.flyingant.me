import { createStore, applyMiddleware, compose } from 'redux';
import Immutable from 'immutable';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './reducers';
import rootSagas from './sagas';

const logger = createLogger({
  stateTransformer(state) {
    return Immutable.fromJS(state).toJS();
  },
});

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(applyMiddleware(thunk, logger, sagaMiddleware));

export default function configuredStore(initialState) {
  const store = createStore(rootReducers, initialState, enhancer);
  sagaMiddleware.run(rootSagas);
  return { store };
}
