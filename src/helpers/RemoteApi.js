import axios from 'axios';

import {apiConfig} from '../constants/defaultValues'

const get = (endpoint, query) => {
  var token = localStorage.getItem('user_token');

  return axios({
    method: 'get',
    headers: { Authorization: `Bearer ${token}` },
    url: apiConfig.apiURL + endpoint,
    params: query || {}
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

const postFile = (endpoint, body) => {
  var token = localStorage.getItem('user_token');

  const data = new FormData();
  for (var p in body) {
    if (p !== 'hasFile') {
      data.append(p, body[p])
    }
  }

  return axios({
    method: 'post',
    headers: { Authorization: `Bearer ${token}` },
    url: apiConfig.apiURL + endpoint,
    data
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

const putFile = (endpoint, body) => {
  var token = localStorage.getItem('user_token');
  
  const data = new FormData();
  for (var p in body) {
    if (p !== 'hasFile') {
      data.append(p, body[p])
    }
  }

  return axios({
    method: 'put',
    headers: { Authorization: `Bearer ${token}` },
    url: apiConfig.apiURL + endpoint,
    data
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
  if (values.hasFile) {
    return postFile(endpoint, values);
  } else {
    return post(endpoint, values);
  }
}

const readData = (endpoint, query={}) => {
  return get(endpoint, query);
}

const updateData = (endpoint, id, values) => {
  if (values.hasFile) {
    return putFile(endpoint + '/' + id, values);
  } else {
    return put(endpoint + '/' + id, values);
  }
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
