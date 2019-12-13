import React from 'react';
import DefaultHeader from '../DefaultHeader/DefaultHeader';
import DefaultMain from '../DefaultMain/DefaultMain';
import DefaultFooter from '../DefaultFooter/DefaultFooter';
import './DefaultLayout.scss';

const DefaultLayout = (props) => {
  return (
    <div className="default-layout">
      <DefaultHeader />
      <DefaultMain>
        {props.children}
      </DefaultMain>
      <DefaultFooter />
    </div>
  )
}

export default DefaultLayout;
