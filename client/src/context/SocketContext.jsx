import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { useSocket } from '../hooks/useSocket';

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { socket, online, connectSocket, disconnectSocket } = useSocket(
    'http://localhost:8081'
  );
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    if (authState.logged) {
      connectSocket();
    }
  }, [authState, connectSocket]);

  useEffect(() => {
    if (!authState.logged) {
      disconnectSocket();
    }
  }, [authState, disconnectSocket]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
