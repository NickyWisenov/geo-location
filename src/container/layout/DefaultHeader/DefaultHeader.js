import React from 'react';
import { Link } from 'react-router-dom';
import './DefaultHeader.scss';
import logo from '../../../assets/imgs/logo.svg';

const DefaultHeader = () => {
  return(
    <div className="default-header columns">
      <div className="logo-wrapper column is-1">
        <img src={logo} alt="Logo img" className="logo"/>
      </div>
      <div className="btn-logout column is-3">
        <Link to="/singIn" className="button is-link">
          Sign In
        </Link>
      </div>
    </div>
  )
}

export default DefaultHeader;
