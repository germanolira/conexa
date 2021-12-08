import axios from 'axios';
import React, { createContext, ReactNode, useContext } from 'react';

interface AuthProviderProps {
  children: ReactNode
}

interface User {
  email: string;
  senha: string;
  token?: string;
}

interface IAuthContextData {
  user: User;
}

export const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const user = {
    email: '',
    senha: '',
  }

  return (
    <AuthContext.Provider value={
      {
        user,
      }
    }>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };