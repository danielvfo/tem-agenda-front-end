import React from 'react';
import {
  Route as ReactRouterRoute,
  RouteProps as ReactRouterProps,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';

interface RouteProps extends ReactRouterProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  userName: string;
  phone: string;
  description?: string;
  type?: string;
  address?: string;
  whatsapp?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
  userType?: string;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  function returnDashboardPath(loggedUser: User): string {
    if (loggedUser.userType === 'user') {
      return '/user-dashboard';
    }
    return '/business-dashboard';
  }

  return (
    <ReactRouterRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : returnDashboardPath(user),
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
