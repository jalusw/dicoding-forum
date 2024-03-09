import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Thread } from '../entities';
import { getThread } from '../usecases';

interface ThreadState {
  thread: Thread | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ThreadState = {
  thread: null,
  status: 'idle',
  error: null,
};

const getThreadAsync = createAsyncThunk('thread/getThread', getThread);

const threadSlice = createSlice({
  name: 'thread',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getThreadAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getThreadAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.thread = action.payload;
      })
      .addCase(getThreadAsync.rejected, (state) => {
        state.status = 'failed';
      }),
});

export { getThreadAsync };
export default threadSlice.reducer;
