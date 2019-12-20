import axios from 'axios';

import {apiConfig} from '../constants/defaultValues'

console.log(process.env.NODE_ENV);

const get = (endpoint, query) => {
  var token = localStorage.getItem('user_token');

  return axios({
    method: 'get',
    headers: { Authorization: `Bearer ${token}` },
    url: apiConfig.apiURL + endpoint,
    query: query || {}
  });
};

const postNoToken = (endpoint, body) => {
  return axios({
    method: 'post',
    url: apiConfig.apiURL + endpoint,
    data: body
  });
};

const post = (endpoint, body) => {
  var token = localStorage.getItem('user_token');

  return axios({
    method: 'post',
    headers: { Authorization: `Bearer ${token}` },
    url: apiConfig.apiURL + endpoint,
    data: body
  });
};

const put = (endpoint, body) => {
  var token = localStorage.getItem('user_token');

  return axios({
    method: 'put',
    headers: { Authorization: `Bearer ${token}` },
    url: apiConfig.apiURL + endpoint,
    data: body
  });
};

const remove = (endpoint) => {
  var token = localStorage.getItem('user_token');

  return axios({
    method: 'delete',
    headers: { Authorization: `Bearer ${token}` },
    url: apiConfig.apiURL + endpoint
  });
};

const signInWithEmailAndPassword = (email, password) => {
  return postNoToken('auth/login', {
    email,
    password
  });
}

const loadMe = () => {
  const type = localStorage.getItem('user_type');
  return get(type + 's/me', {});
}

const auth = {
  loadMe,
  signInWithEmailAndPassword
};

const createData = (endpoint, values) => {
  return post(endpoint, values);
}

const readData = (endpoint, query={}) => {
  return get(endpoint, query);
}

const updateData = (endpoint, id, values) => {
  return put(endpoint + '/' + id, values);
}

const deleteData = (endpoint, id) => {
  return remove(endpoint + '/' + id);
}

const data = {
  create: createData,
  read: readData,
  update: updateData,
  delete: deleteData
};

export {
  auth,
  data
};
