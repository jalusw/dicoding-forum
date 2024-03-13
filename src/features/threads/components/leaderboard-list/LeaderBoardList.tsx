import { useAppDispatch, useAppSelector } from '@/common/hooks';
import { FC, useEffect } from 'react';
import { getLeaderboardsAsync } from '../../slices/leaderboardsSlice';

const LeaderBoardList: FC = () => {
  const dispatch = useAppDispatch();
  const leaderboardsRequestStatus = useAppSelector(
    (state) => state.leaderboards.status,
  );
  const leaderboards = useAppSelector(
    (state) => state.leaderboards.leaderboards,
  );

  useEffect(() => {
    dispatch(getLeaderboardsAsync());
  }, []);

  if (leaderboardsRequestStatus === 'loading') {
    return <>Loading..</>;
  }

  return (
    <section>
      {leaderboards.map((leaderboard) => (
        <p>
          {leaderboard.user.name}, {leaderboard.score}
        </p>
      ))}
    </section>
  );
};

export default LeaderBoardList;
