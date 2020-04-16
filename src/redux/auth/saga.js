
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { auth } from '../../helpers/RemoteApi';
import {
  LOAD_ME,
  LOGIN_USER,
  LOGOUT_USER
} from '../actions';

import {
  loadMeSuccess,
  loadMeError,
  loginUserSuccess,
  loginUserError
} from './actions';


export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}

const loginWithEmailPasswordAsync = async (email, password) =>
  await auth.signInWithEmailAndPassword(email, password)
    .then(authUser => authUser)
    .catch(error => error);



function* loginWithEmailPassword({ payload }) {
  const { email, password } = payload.user;
  const { onSuccess } = payload;
  try {
    const loginUser = yield call(loginWithEmailPasswordAsync, email, password);
    if (!loginUser.message) {
      localStorage.setItem('user_token', loginUser.data.access_token);
      localStorage.setItem('user_info', JSON.stringify(loginUser.data.user));
      localStorage.setItem('user_type', loginUser.data.user_type);
      yield put(loginUserSuccess(loginUser.data));
      if (onSuccess) {
        yield onSuccess();
      }
    } else {
      yield put(loginUserError(loginUser.response.data.message));
    }
  } catch (error) {
    yield put(loginUserError(error));
    
  }
}

export function* watchLoadMe() {
  yield takeEvery(LOAD_ME, loadMe);
}

const loadMeAsync = async () =>
  await auth.loadMe()
    .then(userInfo => userInfo)
    .catch(error => error);

function* loadMe({ payload }) {
  const { onSuccess, onFailure } = payload;
  try {
    const userInfo = yield call(loadMeAsync);
    if (!userInfo.message) {
      localStorage.setItem('user_info', JSON.stringify(userInfo.data));

      yield put(loadMeSuccess({
        userInfo: userInfo.data,
        userType: localStorage.getItem('user_type'),
        user: localStorage.getItem('user_token')
      }));

      if (onSuccess) {
        yield onSuccess();
      }
    } else {
      if (onFailure) {
        const status = userInfo.request ? userInfo.request.status : 0;
        yield onFailure(userInfo.message, status);
      }
      yield put(loadMeError(userInfo.message));
    }
  } catch (error) {
    if (onFailure) {
      yield onFailure(error);
    }
    yield put(loadMeError(error));
    
  }
}

export function* watchLogoutUser() {
  yield takeEvery(LOGOUT_USER, logout);
}

function* logout({ payload }) {
  const { onSuccess } = payload
  try {
    localStorage.removeItem('user_info');
    localStorage.removeItem('user_token');
    localStorage.removeItem('user_type');
    localStorage.removeItem('cart_services');
    if (onSuccess) {
      yield onSuccess();
    }
  } catch (error) {
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchLoadMe),
    fork(watchLogoutUser)
  ]);
}