import React from 'react';
import { Link } from 'react-router-dom'
import './DefaultMainSidebar.scss';

const DefaultMainSidebar = (props) => {
  return (
    <div className="default-sidebar columns">
      <div className="side-menus">
        <Link to="/account/dashboard" className="side-menus__item">
          Dashboard
        </Link>
        <Link to="/account" className="side-menus__item">
          Plans
        </Link>
      </div>
      <div className="options">
        <div className="option-item">
          <Link to="/singout">
            <span className="icon">
              <i className="fas fa-sign-out-alt"></i>
            </span>
            Sign Out
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DefaultMainSidebar;
