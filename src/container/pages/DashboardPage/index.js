import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import DashboardPage from './DashboardPage';
import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout';

const Dashboard = (props) => {

  const { match } = props;
  return (
    <DefaultLayout>
      <Switch>
        <Route path={`${match.url}/dashboard`}>
          <DashboardPage />
        </Route>
        <Redirect to={`${match.url}/dashboard`} />
      </Switch>
    </DefaultLayout>
  )
}

export default Dashboard
