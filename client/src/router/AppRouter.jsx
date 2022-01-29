import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AuthRouter from './AuthRouter';

import ChatPage from '../pages/ChatPage';

const AppRouter = () => {
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
