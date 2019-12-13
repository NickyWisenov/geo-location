import React from 'react';
import HomePage from "../container/pages/HomePage/HomePage";
import LoginPage from '../container/pages/LoginPage/LoginPage';

export const routesConfig = [
  {
    path: '/',
    component: <HomePage />
  },
  {
    path: '/login',
    component: <LoginPage />
  }
];
