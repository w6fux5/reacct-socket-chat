import React, { createContext, useState, useCallback } from 'react';

import { fetchSinToken, fetchConToken } from '../utils/fetch';

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
      const { user, token } = response || {};
      const { uid, name, email } = user || {};
      localStorage.setItem('token', token);
      setAuthState({
        uid,
        name,
        email,
        logged: true,
        checking: false,
      });
    }

    return response?.ok;
  };

  const register = async (name, email, password) => {
    const response = await fetchSinToken(
      'login/new',
      { name, email, password },
      'POST'
    );

    if (response?.ok) {
      const { user, token } = response || {};
      const { uid, name, email } = user || {};

      localStorage.setItem('token', token);

      setAuthState({
        uid,
        name,
        email,
        logged: true,
        checking: false,
      });
    }

    return response?.ok;
  };

  const validToken = useCallback(async () => {
    const token = localStorage.getItem('token') || '';

    if (!token) {
      setAuthState({
        logged: false,
        checking: false,
      });

      return;
    }

    const response = await fetchConToken('login/token');

    if (response.ok) {
      const { user, token } = response || {};
      const { uid, name, email } = user || {};

      localStorage.setItem('token', token);
      setAuthState({
        uid,
        name,
        email,
        logged: true,
        checking: false,
      });
    } else {
      setAuthState({
        logged: false,
        checking: false,
      });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setAuthState({
      logged: false,
      checking: false,
    });
  };

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
