import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { useSocket } from '../hooks/useSocket';
import { ChatContext } from '../context/chat/ChatContext';

import { scrollToBottomAnimated } from '../utils/scrollToBottom';

import types from './types';

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { socket, online, connectSocket, disconnectSocket } = useSocket(
    'http://localhost:8081'
  );
  const { authState } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

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

  useEffect(() => {
    socket?.on('list-users', (users) => {
      dispatch({
        type: types.SET_USER_LIST,
        payload: users,
      });
    });
  }, [socket, dispatch]);

  useEffect(() => {
    socket?.on('message-personal', (message) => {
      console.log(message);
      dispatch({
        type: types.SET_MESSAGE_LIST,
        payload: message.data,
      });

      scrollToBottomAnimated('message-container');
    });
  }, [socket, dispatch]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
