import { configureStore } from '@reduxjs/toolkit';

import { threadsSlice } from '@/features/threads/slices';
import { authenticationSlice } from '@/features/authentication/slices';

const store = configureStore({
  reducer: {
    authentication: authenticationSlice,
    threads: threadsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
