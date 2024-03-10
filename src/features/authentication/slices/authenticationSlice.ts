import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../entities';
import {
  authenticateUser,
  getAuthenticatedUser,
  registerUser,
} from '../usecases';

interface AuthenticationState {
  user: User | null;
  token: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AuthenticationState = {
  user: null,
  token: '',
  status: 'idle',
  error: null,
};

const registerUserAsync = createAsyncThunk(
  'authentication/register',
  registerUser,
);

const authenticateUserAsync = createAsyncThunk(
  'authentication/authenticate',
  authenticateUser,
);

const getAuthenticatedUserAsync = createAsyncThunk(
  'authentication/getAuthenticatedUser',
  getAuthenticatedUser,
);

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = '';
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(registerUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUserAsync.fulfilled, (state) => {
        state.status = 'idle';
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to create user';
      })
      .addCase(authenticateUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(authenticateUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.token = action.payload.data.token;
      })
      .addCase(authenticateUserAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to authenticate';
      })
      .addCase(getAuthenticatedUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAuthenticatedUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload.user;
      })
      .addCase(getAuthenticatedUserAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to get user data';
      }),
});

export const { logout } = authenticationSlice.actions;
export { registerUserAsync, authenticateUserAsync, getAuthenticatedUserAsync };
export default authenticationSlice.reducer;
