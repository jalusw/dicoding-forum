import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Thread } from '../entities';
import {
  getThread,
  createComment,
  downVoteThread,
  neutralizeVoteThread,
  upVoteThread,
  upVoteComment,
  createThread,
  neturalizeVoteComment,
} from '../usecases';
import downVoteComment from '../usecases/downVoteComment';

interface ThreadState {
  thread: Thread;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ThreadState = {
  thread: {},
  status: 'loading',
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

const upVoteCommentAsync = createAsyncThunk(
  'thread/upVoteComment',
  upVoteComment,
);

const downVoteCommentAsync = createAsyncThunk(
  'thread/downVoteComment',
  downVoteComment
);

const neutralizeVoteCommentAsync = createAsyncThunk(
  'thread/neutralizeVoteComment',
  neturalizeVoteComment,
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
    appendCommentUpVote: (state, action) => {
      const comment = state.thread.comments!.filter(
        (comment) => comment.id === action.payload.commentId,
      )[0];
      comment!.upVotesBy!.push(action.payload.userId);
    },
    appendCommentDownVote: (state, action) => {
      const comment = state.thread.comments!.filter(
        (comment) => comment.id === action.payload.commentId,
      )[0];
      comment!.downVotesBy!.push(action.payload.userId);
    },
    removeCommentUpVote: (state, action) => {
      const comment = state.thread.comments!.filter(
        (comment) => comment.id === action.payload.commentId,
      )[0];
      comment!.upVotesBy = comment!.upVotesBy!.filter(
        (userId) => userId !== action.payload.userId,
      );
    },
    removeCommentDownVote: (state, action) => {
      const comment = state.thread.comments!.filter(
        (comment) => comment.id === action.payload.commentId,
      )[0];
      comment!.downVotesBy = comment!.downVotesBy!.filter(
        (userId) => userId !== action.payload.userId,
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
  appendCommentUpVote,
  removeCommentUpVote,
  appendCommentDownVote,
  removeCommentDownVote,
} = threadSlice.actions;
export {
  getThreadAsync,
  createCommentAsync,
  downVoteThreadAsync,
  upVoteThreadAsync,
  neutralizeVoteThreadAsync,
  upVoteCommentAsync,
  downVoteCommentAsync,
  neutralizeVoteCommentAsync,
  createThreadAsync,
};
export default threadSlice.reducer;
