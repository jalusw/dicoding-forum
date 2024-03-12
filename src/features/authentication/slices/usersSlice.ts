import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUsers } from '../usecases';

interface UsersState {
  users: object;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  status: 'idle',
  error: null,
};

const getUsersAsync = createAsyncThunk('users/get', getUsers);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getUsersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      }),
});

export { getUsersAsync };
export default usersSlice.reducer;
