import { AuthProvider } from './auth/AuthContext';
import { SocketProvider } from './context/SocketContext';
import { ChatProvider } from './context/chat/ChatContext';

import AppRouter from './router/AppRouter';
import moment from 'moment';
import 'moment/locale/zh-tw';
moment.locale('zh-tw');
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const App = () => {
  return (
    <ChatProvider>
      <AuthProvider>
        <SocketProvider>
          <AppRouter />
        </SocketProvider>
      </AuthProvider>
    </ChatProvider>
  );
};

export default App;
