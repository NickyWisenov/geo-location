import React from 'react';
import './DefaultMainContent.scss';

const DefaultMainContent = (props) => {
  return(
    <div className="default-main-content columns">
      {props.children}
    </div>
  )
}

export default DefaultMainContent;
