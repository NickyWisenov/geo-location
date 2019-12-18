import React from 'react';
import './DefaultMain.scss';
import DefaultMainSidebar from '../DefaultMainSidebar/DefaultMainSidebar';
import DefaultMainContent from '../DefaultMainContent/DefaultMainContent';

const DefaultMain = (props) => {
  return(
    <div className="default-main columns">
      <div className="side-bar column is-3">
        <DefaultMainSidebar />
      </div>
      <div className="main-content column is-9">
        <h1>Title Of the Page</h1>
        <DefaultMainContent>
          {props.children}
        </DefaultMainContent>
      </div>
    </div>
  )
}

export default DefaultMain;
