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
    <div className="page__login container">
      <div className="d-flex justify-content-center h-100 ">
        <div className="card">
          <div className="card-header">
            <h4>Sign In</h4>
          </div>
          <div className="card-body pt-4 pb-0">
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-user"></i></span>
              </div>
              <input
                className="input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />

            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-key"></i></span>
              </div>
              <input
                className="input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />

            </div>
            <div className="form-group text-center">
              <button className="btn btn-success btn-sm px-5 " onClick={handleSubmit}>
                Login
            </button>
            </div>
            <div className="input-group form-group">
              <p className="pr-2">
                Don't you have an account yet?
              </p>
              <a href="/signup">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default LoginPage;
