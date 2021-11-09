import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import SignOut from '../components/SignOut';
import DashboardTemplate from '../components/DashboardTemplate';
import BusinessProfile from '../pages/Profile/BusinessProfile';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signout" component={SignOut} />
      <Route path="/dashboard" component={DashboardTemplate} isPrivate />
      <Route path="/business-profile" component={BusinessProfile} isPrivate />
    </Switch>
  );
};

export default Routes;
