
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { data } from '../../helpers/RemoteApi';
import {
  CREATE_DATA,
  READ_DATA,
  UPDATE_DATA,
  DELETE_DATA,
} from '../actions';

import {
  createDataSuccess,
  createDataError,

  readDataSuccess,
  readDataError,

  updateDataSuccess,
  updateDataError,

  deleteDataSuccess,
  deleteDataError,
} from './actions';


export function* watchCreateData() {
  yield takeEvery(CREATE_DATA, createDataSaga);
}

const createDataSagaAsync = async (endpoint, values) =>
  await data.create(endpoint, values)
    .then(newData => newData)
    .catch(error => error);

function* createDataSaga({ payload }) {
  const { endpoint, data, onSuccess } = payload;
  try {
    const newData = yield call(createDataSagaAsync, endpoint, data);
    if (!newData.message) {
      yield put(createDataSuccess(endpoint, newData.data));
      if (onSuccess) {
        yield onSuccess();
      }
    } else {
      yield put(createDataError(newData.message));
    }
  } catch (error) {
    yield put(createDataError(error));
    
  }
}

export function* watchReadData() {
  yield takeEvery(READ_DATA, readDataSaga);
}

const readDataSagaAsync = async (endpoint, values) =>
  await data.read(endpoint, values)
    .then(newData => newData)
    .catch(error => error);

function* readDataSaga({ payload }) {
  const { endpoint, data, onSuccess } = payload;
  try {
    const listData = yield call(readDataSagaAsync, endpoint, data);
    if (!listData.message) {
      yield put(readDataSuccess(endpoint, listData.data));
      if (onSuccess) {
        yield onSuccess();
      }
    } else {
      yield put(readDataError(listData.message));
    }
  } catch (error) {
    yield put(readDataError(error));
    
  }
}

export function* watchUpdateData() {
  yield takeEvery(UPDATE_DATA, updateDataSaga);
}

const updateDataSagaAsync = async (endpoint, id, values) =>
  await data.update(endpoint, id, values)
    .then(updatedData => updatedData)
    .catch(error => error);



function* updateDataSaga({ payload }) {
  const { endpoint, id, data, onSuccess } = payload;
  try {
    const updatedData = yield call(updateDataSagaAsync, endpoint, id, data);
    if (!updatedData.message) {
      yield put(updateDataSuccess(endpoint, updatedData.data));
      if (onSuccess) {
        yield onSuccess();
      }
    } else {
      yield put(updateDataError(updatedData.message));
    }
  } catch (error) {
    yield put(updateDataError(error));
    
  }
}

export function* watchDeleteData() {
  yield takeEvery(DELETE_DATA, deleteDataSaga);
}

const deleteDataSagaAsync = async (endpoint, id) =>
  await data.delete(endpoint, id)
    .then(delData => delData)
    .catch(error => error);



function* deleteDataSaga({ payload }) {
  const { endpoint, id, onSuccess } = payload;
  try {
    const delData = yield call(deleteDataSagaAsync, endpoint, id);
    if (!delData.message) {
      yield put(deleteDataSuccess(endpoint, delData.data));
      if (onSuccess) {
        yield onSuccess();
      }
    } else {
      yield put(deleteDataError(delData.message));
    }
  } catch (error) {
    yield put(deleteDataError(error));
    
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchCreateData),
    fork(watchReadData),
    fork(watchUpdateData),
    fork(watchDeleteData)
  ]);
}