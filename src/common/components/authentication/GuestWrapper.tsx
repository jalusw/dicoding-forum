import { useAuth } from '@/common/hooks';
import { FC, ReactElement } from 'react';

interface GuestWrapperProps {
  children: ReactElement;
}

const GuestWrapper: FC<GuestWrapperProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <></>;
  }

  return children;
};

export default GuestWrapper;
