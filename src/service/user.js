import RestClient from './base';

export const signup = (name, email, password) => {
  const data = { name, email, password };
  const options = {
    headers: { 'Content-Type': 'application/json' }
  };

  return RestClient.post('/auth/register', data, options);
}

export const login = (email, password) => {
  const data = { email, password };

  const options = {
    headers: { 'Content-Type': 'application/json' }
  };

  return RestClient.post('/auth/login', data, options);
}

export const logout = () => {
  localStorage.removeItem('geo-token');
  localStorage.removeItem('geo-user');
}

