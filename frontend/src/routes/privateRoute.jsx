import { Navigate } from 'react-router-dom';
import isAuthenticated from '../utils/isAuthenticated';

export const PrivateRoute = ({ children, redirectTo }) => (
  isAuthenticated() ? children : <Navigate to={ redirectTo } />
);
