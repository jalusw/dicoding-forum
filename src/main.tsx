import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { createRoot } from 'react-dom/client';
import { persiststor, router, store } from '@/config';

import { Toaster } from '@/common/components/ui/toaster';
import '@/common/styles/index.css';


const targetRootElement = document.querySelector('#root')!;
const reactroot = createRoot(targetRootElement);

reactroot.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persiststor}>
        <RouterProvider router={router} />
        <Toaster/>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
