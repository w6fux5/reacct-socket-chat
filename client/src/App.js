import { AuthProvider } from './auth/AuthContext';

import AppRouter from './router/AppRouter';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
