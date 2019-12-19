import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import dataSagas from './data/saga';


export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    dataSagas()
  ]);
}
