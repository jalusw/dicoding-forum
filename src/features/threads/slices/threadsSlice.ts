import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Thread } from '../entities';
import { getThreads } from '../usecases';

interface ThreadsState {
  threads: Thread[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ThreadsState = {
  threads: [],
  status: 'idle',
  error: null,
};

const getThreadsAsync = createAsyncThunk<Thread[], void>(
  'threads/getThreads',
  getThreads,
);

const threadsSlice = createSlice({
  name: 'threads',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getThreadsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        getThreadsAsync.fulfilled,
        (state, action: PayloadAction<Thread[]>) => {
          state.status = 'idle';
          state.threads = action.payload;
        },
      )
      .addCase(getThreadsAsync.rejected.type, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'An error occured';
      }),
});

export { getThreadsAsync };
export default threadsSlice.reducer;
