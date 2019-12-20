import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const SecureRoute = (props) => {
  const token = localStorage.getItem('geo-token');
  if (!token) {
    return (
      <Redirect to='/login' />
    )
  }

  return <Route {...props} />
}

export default SecureRoute;