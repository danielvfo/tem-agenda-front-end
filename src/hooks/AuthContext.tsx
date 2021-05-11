import { AxiosResponse } from 'axios';
import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

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
interface AuthState {
  token: string;
  user: User;
}
interface SignInCredentials {
  email: string;
  password: string;
  type: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@App:TemAgenda:token');
    const user = localStorage.getItem('@App:TemAgenda:user');
    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password, type }) => {
    let response: AxiosResponse;

    if (type === 'user') {
      response = await api.post('user/session', {
        email,
        password,
      });
    } else {
      response = await api.post('business/session', {
        email,
        password,
      });
    }
    const { token } = response.data;
    const user = response.data.user
      ? response.data.user
      : response.data.business;
    user.userType = type;
    localStorage.setItem('@App:TemAgenda:token', token);
    localStorage.setItem('@App:TemAgenda:user', JSON.stringify(user));
    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@App:TemAgenda:token');
    localStorage.removeItem('@App:TemAgenda:user');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
