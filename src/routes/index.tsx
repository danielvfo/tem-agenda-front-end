import React from 'react';
import { Routes as ReactRouterRoutes, Navigate, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../components/Dashboard';
import UserProfile from '../pages/Profile/UserProfile';
import BusinessProfile from '../pages/Profile/BusinessProfile';
import { useAuth } from '../hooks/AuthContext';

const RequireAuth: React.FC = ({ children }) => {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/" />;
};

const Routes: React.FC = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />

      <Route
        path="/user-profile"
        element={
          <RequireAuth>
            <Dashboard>
              <UserProfile />
            </Dashboard>
          </RequireAuth>
        }
      />
      <Route path="/business-profile" element={<BusinessProfile />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
