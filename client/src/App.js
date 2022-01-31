import { AuthProvider } from './auth/AuthContext';
import { SocketProvider } from './context/SocketContext';
import { ChatProvider } from './context/chat/ChatContext';

import AppRouter from './router/AppRouter';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const App = () => {
  return (
    <AuthProvider>
      <SocketProvider>
        <ChatProvider>
          <AppRouter />
        </ChatProvider>
      </SocketProvider>
    </AuthProvider>
  );
};

export default App;
