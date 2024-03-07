import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { persiststor, router, store } from '@/config';

import '@/common/styles/index.css';
import { PersistGate } from 'redux-persist/integration/react';

const targetRootElement = document.querySelector('#root')!;
const reactroot = createRoot(targetRootElement);

reactroot.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persiststor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>,
);
