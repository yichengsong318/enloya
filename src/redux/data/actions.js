import {
  CREATE_DATA,
  CREATE_DATA_SUCCESS,
  CREATE_DATA_ERROR,
  READ_DATA,
  READ_DATA_SUCCESS,
  READ_DATA_ERROR,
  UPDATE_DATA,
  UPDATE_DATA_SUCCESS,
  UPDATE_DATA_ERROR,
  DELETE_DATA,
  DELETE_DATA_SUCCESS,
  DELETE_DATA_ERROR
} from '../actions';

export const createData = (endpoint, data, onSuccess) => ({
  type: CREATE_DATA,
  payload: { endpoint, data, onSuccess }
});
export const createDataSuccess = (endpoint, data) => ({
  type: CREATE_DATA_SUCCESS,
  payload: {endpoint, data}
});
export const createDataError = (message) => ({
  type: CREATE_DATA_ERROR,
  payload: { message }
});


export const readData = (endpoint, data, onSuccess) => ({
  type: READ_DATA,
  payload: { endpoint, data, onSuccess }
});
export const readDataSuccess = (endpoint, data) => ({
  type: READ_DATA_SUCCESS,
  payload: {endpoint, data}
});
export const readDataError = (message) => ({
  type: READ_DATA_ERROR,
  payload: { message }
});


export const updateData = (endpoint, id, data, onSuccess) => ({
  type: UPDATE_DATA,
  payload: { endpoint, id, data, onSuccess }
});
export const updateDataSuccess = (endpoint, data) => ({
  type: UPDATE_DATA_SUCCESS,
  payload: {endpoint, data}
});
export const updateDataError = (message) => ({
  type: UPDATE_DATA_ERROR,
  payload: { message }
});


export const deleteData = (endpoint, id, onSuccess) => ({
  type: DELETE_DATA,
  payload: { endpoint, id, onSuccess }
});
export const deleteDataSuccess = (endpoint, data) => ({
  type: DELETE_DATA_SUCCESS,
  payload: {endpoint, data}
});
export const deleteDataError = (message) => ({
  type: DELETE_DATA_ERROR,
  payload: { message }
});
