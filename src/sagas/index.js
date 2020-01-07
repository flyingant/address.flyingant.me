import { fork } from 'redux-saga/effects';
import AppSagas from './AppSagas';

export default function* rootSagas() {
  yield fork(AppSagas);
}
