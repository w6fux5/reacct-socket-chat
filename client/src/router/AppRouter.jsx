import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AuthRouter from './AuthRouter';

import ChatPage from '../pages/ChatPage';

import { AuthContext } from '../auth/AuthContext';

const AppRouter = () => {
  const { validToken, authState } = useContext(AuthContext);

  useEffect(() => {
    validToken();
  }, [validToken]);

  if (authState.checking) {
    return <h1>Check user!</h1>;
  }
  return (
    <Router>
      <Routes>
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/" element={<ChatPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
