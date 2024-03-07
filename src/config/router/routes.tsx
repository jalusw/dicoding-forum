import { RouteObject } from 'react-router-dom';
import { NotFoundPage } from '@/common/components';

import { HomePage } from '@/features/threads/components';
import { LoginPage, RegisterPage } from '@/features/authentication/components';

const routes: RouteObject[] = [
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/login',
    element: <LoginPage/>
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
