import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import HomePage from './container/pages/HomePage/HomePage';
import LoginPage from './container/pages/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
