import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import SignOut from '../components/SignOut';
import UserDashboard from '../pages/Dashboard/UserDashboard';
import BusinessDashboard from '../pages/Dashboard/BusinessDashboard';
import BusinessProfile from '../pages/Profile/BusinessProfile';
import SimpleH1 from '../pages/Profile/SimpleH1';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signout" component={SignOut} />
      <Route path="/user-dashboard" component={UserDashboard} isPrivate />
      <Route
        path="/business-dashboard"
        component={BusinessDashboard}
        isPrivate
      />
      <Route path="/business-profile" component={BusinessProfile} isPrivate />
      <Route path="/simple" component={SimpleH1} />
    </Switch>
  );
};

export default Routes;
