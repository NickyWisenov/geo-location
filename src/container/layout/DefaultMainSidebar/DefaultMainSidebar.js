import React from 'react';
import { Link } from 'react-router-dom'
import './DefaultMainSidebar.scss';

const DefaultMainSidebar = (props) => {
  return (
    <React.Fragment>
      <li className="nav-item active">
        <Link to="/account/dashboard" className="nav-link" >
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/account" className="nav-link">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Plans</span>
        </Link>
      </li>
    </React.Fragment>

  )
}

export default DefaultMainSidebar;

