import { useAuth } from '@/common/hooks';
import { FC, ReactElement } from 'react';

interface AuthenticatedWrapperProps {
  children: ReactElement;
}

const AuthenticatedWrapper: FC<AuthenticatedWrapperProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <></>;
  }

  return children;
};

export default AuthenticatedWrapper;
