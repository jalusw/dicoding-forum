import { useAppSelector } from '@/common/hooks';
import { FC, ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactElement;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.authentication.token);

  useEffect(() => {
    if (token.trim().length ===  0) {
      return navigate('/login');
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
