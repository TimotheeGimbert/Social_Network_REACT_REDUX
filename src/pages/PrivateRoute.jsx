import React from 'react';
import { Navigate } from 'react-router-dom';
import { checkAuth } from '../App';

const PrivateRoute = ({ children }) => {
  return checkAuth() ? children : <Navigate to='/login' />
}

export default PrivateRoute;