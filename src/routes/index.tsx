import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import DashboardTemplate from '../components/DashboardTemplate';
import UserProfile from '../pages/Profile/UserProfile';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={DashboardTemplate} isPrivate />
      <DashboardTemplate>
        <Route path="/user-profile" component={UserProfile} isPrivate />
      </DashboardTemplate>
    </Switch>
  );
};

export default Routes;
