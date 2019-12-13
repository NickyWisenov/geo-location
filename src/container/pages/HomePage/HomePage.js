import React from 'react';
import { Route } from 'react-router-dom';

import './HomePage.scss';
import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout';
import DashboardPage from '../DashboardPage/DashboardPage';

const HomePage = (props) => {
  return(
    <div className="page__home">
      <DefaultLayout>
        <Route path={`${props.match.path}/dashboard`} exact component={DashboardPage} />
      </DefaultLayout>
    </div>
  )
}

export default HomePage;
