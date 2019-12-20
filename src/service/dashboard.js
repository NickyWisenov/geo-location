import RestClient from './base';

export const getTargets = (token) => RestClient.authGet('/api/admin', token);

export const getTargetDetail = (token, id) => RestClient.post(`/api/admin/${id}`, token);

export const createTarget = (token, name, status, comment, file) => {
  const formData = new FormData();
  formData.append('datafile', file);
  formData.append('name', name);
  formData.append('status', status);
  formData.append('comment', comment);

  const options = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  return RestClient.authPost(`/api/admin`, token, formData, options);
}


export const updateTarget = (token, id, data) => {
  const options = {
    headers: { 'Content-Type': 'application/json' }
  };

  return RestClient.authPut(`/api/admin/${id}`, token, data, options);
}

export const deleteTarget = (token, id) => {
  return RestClient.authDelete(`/api/admin/${id}`, token);
}

