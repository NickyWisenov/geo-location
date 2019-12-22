import React from 'react';
import './DefaultMain.scss';
import DefaultMainSidebar from '../DefaultMainSidebar/DefaultMainSidebar';
import DefaultMainContent from '../DefaultMainContent/DefaultMainContent';

const DefaultMain = (props) => {
  return (
    <React.Fragment>
      <div id="wrapper">
        <div className="sidebar navbar-nav">
          <DefaultMainSidebar />
        </div>
        <div className="content-wrapper">
          <DefaultMainContent>
            {props.children}
          </DefaultMainContent>
        </div>
      </div>
    </React.Fragment>
  )
}

export default DefaultMain;
