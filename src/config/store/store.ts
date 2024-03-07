import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { threadsSlice } from '@/features/threads/slices';
import { authenticationSlice } from '@/features/authentication/slices';

const rootReducer = combineReducers({
  authentication: authenticationSlice,
  threads: threadsSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
