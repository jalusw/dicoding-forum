import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Thread } from '../entities';
import { getThreads } from '../usecases';

interface ThreadsState {
  threads: Thread[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  filter: {
    category: string | null;
  };
}

const initialState: ThreadsState = {
  threads: [],
  status: 'idle',
  error: null,
  filter: {
    category: null,
  },
};

const getThreadsAsync = createAsyncThunk<Thread[], void>(
  'threads/get',
  getThreads,
);

const threadsSlice = createSlice({
  name: 'threads',
  initialState,
  reducers: {
    appendThread: (state, action) => {
      state.threads = [action.payload, ...state.threads];
    },
    removeThread: (state, action) => {
      state.threads = state.threads.filter(
        (thread) => thread.id !== action.payload,
      );
    },
    setCategoryFilter: (state, action) => {
      state.filter.category = action.payload;
    },
  },
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

export const { appendThread, removeThread, setCategoryFilter } =
  threadsSlice.actions;
export { getThreadsAsync };
export default threadsSlice.reducer;
