import React, { useEffect } from 'react';
import { useAuth } from '../hooks/AuthContext';

const SignOut: React.FC = () => {
  const { signOut } = useAuth();

  useEffect(() => {
    signOut();
  });

  return <h1>Signed out!</h1>;
};
export default SignOut;
