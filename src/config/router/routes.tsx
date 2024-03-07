import { RouteObject } from 'react-router-dom';
import { GuestRoute, NotFoundPage } from '@/common/components';

import { HomePage } from '@/features/threads/components';
import { LoginPage, RegisterPage } from '@/features/authentication/components';
import ProtectedRoute from '@/common/components/route/ProtectedRoute';

const routes: RouteObject[] = [
  {
    path: '/register',
    element: (
      <GuestRoute>
        <RegisterPage />
      </GuestRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <GuestRoute>
        <LoginPage />
      </GuestRoute>
    ),
  },
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
