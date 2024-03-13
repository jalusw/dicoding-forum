import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Leaderboard } from '../entities';
import getLeaderboards from '../usecases/getLeaderboards';

interface LeaderboardsState {
  leaderboards: Leaderboard[];
  status: 'idle' | 'loading' | 'succeeded' | 'error';
  error: string | null;
}

const initialState: LeaderboardsState = {
  leaderboards: [],
  status: 'idle',
  error: null,
};

const getLeaderboardsAsync = createAsyncThunk(
  'leaderboards/get',
  getLeaderboards,
);

const leaderboardsSlice = createSlice({
  name: 'leaderboards',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getLeaderboardsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getLeaderboardsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.leaderboards = action.payload.leaderboards;
      }),
});

export { getLeaderboardsAsync };

export default leaderboardsSlice.reducer;
