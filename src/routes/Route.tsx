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

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactRouterRoute
      {...rest}
      render={({ location }) => {
        if (isPrivate === !!user) {
          return <Component />;
        }
        if (isPrivate) {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location },
              }}
            />
          );
        }
        return <Component />;
      }}
    />
  );
};

export default Route;
