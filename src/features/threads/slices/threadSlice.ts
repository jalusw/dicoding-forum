import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Thread } from '../entities';
import {
  getThread,
  createComment,
  downVoteThread,
  neutralizeVoteThread,
  upVoteThread,
  createThread,
} from '../usecases';

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

const getThreadAsync = createAsyncThunk('thread/get', getThread);

const createCommentAsync = createAsyncThunk(
  'thread/createComment',
  createComment,
);

const downVoteThreadAsync = createAsyncThunk('thread/downVote', downVoteThread);

const upVoteThreadAsync = createAsyncThunk('thread/upVote', upVoteThread);

const neutralizeVoteThreadAsync = createAsyncThunk(
  'thread/neutralize',
  neutralizeVoteThread,
);

const createThreadAsync = createAsyncThunk('thread/create', createThread);

const threadSlice = createSlice({
  name: 'thread',
  initialState,
  reducers: {
    appendComment: (state, action) => {
      state.thread.comments = [action.payload, ...state.thread.comments!];
    },
    removeComment: (state, action) => {
      state.thread.comments = state.thread.comments!.filter(
        (comment) => comment.id !== action.payload,
      );
    },
    appendUpVote: (state, action) => {
      state.thread.upVotesBy = [...state.thread.upVotesBy!, action.payload];
    },
    removeUpVote: (state, action) => {
      state.thread.upVotesBy = state.thread.upVotesBy!.filter(
        (userId) => userId !== action.payload,
      );
    },
    appendDownVote: (state, action) => {
      state.thread.downVotesBy = [...state.thread.downVotesBy!, action.payload];
    },
    removeDownVote: (state, action) => {
      state.thread.downVotesBy = state.thread.downVotesBy!.filter(
        (userId) => userId !== action.payload,
      );
    },
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
        state.error = action.error.message ?? 'Failed to get thread';
      }),
});

export const {
  appendComment,
  removeComment,
  appendUpVote,
  appendDownVote,
  removeDownVote,
  removeUpVote,
} = threadSlice.actions;
export {
  getThreadAsync,
  createCommentAsync,
  downVoteThreadAsync,
  upVoteThreadAsync,
  neutralizeVoteThreadAsync,
  createThreadAsync,
};
export default threadSlice.reducer;
