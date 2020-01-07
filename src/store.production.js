import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './reducers';
import rootSagas from './sagas';

const reducers = combineReducers({
  root: rootReducers,
});

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(applyMiddleware(thunk, sagaMiddleware));

export default function configuredStore(initialState) {
  const store = createStore(reducers, initialState, enhancer);
  sagaMiddleware.run(rootSagas);
  return { store };
}
