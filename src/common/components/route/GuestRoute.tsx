import { useAppSelector } from '@/common/hooks';
import { FC, ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface GuestRouteProps {
  children: ReactElement;
}

const GuestRoute: FC<GuestRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.authentication.token);

  useEffect(() => {
    if (token.trim().length > 0) {
      return navigate('/');
    }
  }, []);

  return <>{children}</>;
};

export default GuestRoute;
