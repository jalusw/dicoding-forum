import { useAppSelector } from '@/common/hooks';
import { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

interface GuestRouteProps {
  children: ReactElement;
}

const GuestRoute: FC<GuestRouteProps> = ({ children }) => {
  const token = useAppSelector((state) => state.authentication.token);

  if (token.trim().length > 0) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default GuestRoute;
