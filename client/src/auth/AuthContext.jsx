import React, { createContext, useState, useCallback } from 'react';

import { fetchSinToken } from '../utils/fetch';

export const AuthContext = createContext();

const initialState = {
  uid: null,
  name: null,
  email: null,
  logged: false,
  checking: true,
};

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(initialState);

  const login = async (email, password) => {
    const response = await fetchSinToken('login', { email, password }, 'POST');

    if (response?.ok) {
      const { user } = response;
      const { uid, name, email } = user || {};
      setAuthState({
        uid,
        name,
        email,
        logged: true,
        checking: false,
      });

      console.log('login ok');
    }

    return response?.ok;
  };

  const register = (name, email, password) => {};

  const validToken = useCallback(() => {}, []);

  const logout = () => {};

  return (
    <AuthContext.Provider
      value={{
        authState,
        login,
        register,
        validToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
