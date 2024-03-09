import { RouteObject } from 'react-router-dom';
import { GuestRoute, NotFoundPage } from '@/common/components';

import { HomePage, ThreadPage } from '@/features/threads/components';
import { LoginPage, RegisterPage } from '@/features/authentication/components';

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
    path: '/thread/:id',
    element: <ThreadPage />,
  },
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
