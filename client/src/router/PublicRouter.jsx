import React from 'react';

import { Navigate } from 'react-router-dom';

const PublicRouter = ({ isAuthenticated, element: Component, ...rest }) => {
  return !isAuthenticated ? <Component {...rest} /> : <Navigate to="/" />;
};

export default PublicRouter;
