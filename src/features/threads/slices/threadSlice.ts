import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Thread } from '../entities';
import { getThread } from '../usecases';
import createComment from '../usecases/createComment';
import downVoteThread from '../usecases/downVoteThread';

interface ThreadState {
  thread: Thread;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ThreadState = {
  thread: {},
  status: 'idle',
  error: null,
};

const getThreadAsync = createAsyncThunk('thread/getThread', getThread);

const createCommentAsync = createAsyncThunk(
  'thread/createComment',
  createComment,
);

const downVoteThreadAsync = createAsyncThunk('thread/downVote', downVoteThread);

const threadSlice = createSlice({
  name: 'thread',
  initialState,
  reducers: {
    appendComment: (state, action) => {
      state.thread.comments = [action.payload,...state.thread.comments!];
    },
    removeComment: (state,action) => {
      state.thread.comments = state.thread.comments!.filter(comment => comment.id !== action.payload);
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(getThreadAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getThreadAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.thread = action.payload;
      })
      .addCase(getThreadAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? "Failed to get thread";
      })
});



export const { appendComment, removeComment } = threadSlice.actions;
export { getThreadAsync, createCommentAsync, downVoteThreadAsync };
export default  threadSlice.reducer;
