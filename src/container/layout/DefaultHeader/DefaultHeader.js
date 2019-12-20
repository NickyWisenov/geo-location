import React from 'react';
import { Link } from 'react-router-dom';
import './DefaultHeader.scss';
import logo from '../../../assets/imgs/logo.svg';

const DefaultHeader = () => {
  return (
    <div className="navbar navbar-expand navbar-dark bg-dark static-top">

      <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
        <i className="fas fa-bars"></i>
      </button>
      <div className="navbar-brand mr-1" href="index.html"><img src={logo} alt="Logo img" className="logo" /></div>

      <Link to="/singIn" className="form-inline my-2 my-lg-0">
        Sign In
      </Link>

    </div>
  )
}

export default DefaultHeader;
