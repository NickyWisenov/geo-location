import Axios from 'axios';

require('dotenv').config()
const serviceURL = 'http://127.0.0.1:5000';
// const serviceURL = process.env.SERVICE_URL;

export default {
  get: (path, config = {}) => Axios.get(serviceURL + path, config)
    .then(res => res.data),
  post: (path, data, config = {}) => Axios.post(serviceURL + path, data, config)
    .then(res => res.data),
  put: (path, data, config = {}) => Axios.put(serviceURL + path, data, config)
    .then(res => res.data),
  delete: (path, config = {}) => Axios.delete(serviceURL + path, config)
    .then(res => res.data),

  authGet: (path, token, config = { headers: {} }) => Axios.get(serviceURL + path, {
    ...config,
    headers: {
      ...config.headers,
      authorization: `Bearer ${token}`
    }
  }).then(res => res.data),
  authPost: (path, token, data, config = { headers: {} }) => Axios.post(serviceURL + path, data, {
    ...config,
    headers: {
      ...config.headers,
      authorization: `Bearer ${token}`
    }
  }).then(res => res.data),
  authPut: (path, token, data, config = { headers: {} }) => Axios.put(serviceURL + path, data, {
    ...config,
    headers: {
      ...config.headers,
      authorization: `Bearer ${token}`
    }
  }).then(res => res.data),
  authDelete: (path, token, config = { headers: {} }) => Axios.delete(serviceURL + path, {
    ...config,
    headers: {
      ...config.headers,
      authorization: `Bearer ${token}`
    }
  }).then(res => res.data),
}