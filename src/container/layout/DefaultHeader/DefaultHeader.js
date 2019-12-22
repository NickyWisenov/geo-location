import React from 'react';
import { Link } from 'react-router-dom';
import './DefaultHeader.scss';


const DefaultHeader = () => {
  const logo = '/logo192.png'
  return (
    <nav className="d-flex justify-content-between navbar navbar-expand navbar-dark bg-dark static-top ">
      <div>
        <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
          <i className="fas fa-bars"></i>
        </button>
        <div className="navbar-brand mr-1" href="index.html">
          <img src={logo} alt="Logo img" className="logo" style={{ width: '30px' }} />
        </div>
      </div>
      <div>
        <Link to="/logout" className="form-inline my-2 my-lg-0 float-right" style={{ color: 'white', fontWeight: '500' }}>
          Logout
        </Link>
      </div>

    </nav >
  )
}

export default DefaultHeader;
