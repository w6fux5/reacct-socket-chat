import { AuthProvider } from './auth/AuthContext';
import { SocketProvider } from './context/SocketContext';

import AppRouter from './router/AppRouter';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const App = () => {
  return (
    <AuthProvider>
      <SocketProvider>
        <AppRouter />
      </SocketProvider>
    </AuthProvider>
  );
};

export default App;
