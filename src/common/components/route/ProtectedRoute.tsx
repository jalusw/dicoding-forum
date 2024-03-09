import { useAppSelector } from '@/common/hooks';
import { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactElement;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const token = useAppSelector((state) => state.authentication.token);

  if (token.trim().length === 0) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
