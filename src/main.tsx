import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { router, store } from '@/config';

import '@/common/styles/index.css';

const targetRootElement = document.querySelector('#root')!;
const reactroot = createRoot(targetRootElement);

reactroot.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
