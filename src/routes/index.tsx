import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import UserDashboard from '../pages/Dashboard/UserDashboard';
import BusinessDashboard from '../pages/Dashboard/BusinessDashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/user-dashboard" component={UserDashboard} isPrivate />
      <Route
        path="/business-dashboard"
        component={BusinessDashboard}
        isPrivate
      />
    </Switch>
  );
};

export default Routes;
