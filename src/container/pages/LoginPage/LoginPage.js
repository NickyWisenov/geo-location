import React from 'react';

//
import * as UserService from '../../../service/user';

import './LoginPage.scss';
import { Redirect } from 'react-router-dom';

const LoginPage = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [ok, setOk] = React.useState(false);

  const handleSubmit = async () => {
    try {
      const data = await UserService.login(email, password);
      localStorage.setItem('geo-token', data.logindata.token);
      localStorage.setItem('geo-user', data.user);
      setOk(true);
    } catch (error) {
      console.log(error);
    }
  }

  if (ok) {
    return (
      <Redirect to='/account/dashboard' />
    )
  }
  return (
    <div className="page__login">
      <div className="box">
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success" onClick={handleSubmit}>
              Login
            </button>
          </p>
        </div>
        <div className="field">
          <p className="control">
            Don't you have an account yet?
            <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
