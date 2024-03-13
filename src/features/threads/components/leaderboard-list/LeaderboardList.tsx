import { useAppDispatch, useAppSelector } from '@/common/hooks';
import { FC, useEffect } from 'react';
import { getLeaderboardsAsync } from '../../slices/leaderboardsSlice';
import LeaderboardListItem from './LeaderboardListItem';

const LeaderboardList: FC = () => {
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
      <h2 className='font-bold'>Leaderboards</h2>
      <ul className="flex flex-col space-y-2 mt-4">
        {leaderboards.map((leaderboard) => (
          <LeaderboardListItem leaderboard={leaderboard} />
        ))}
      </ul>
    </section>
  );
};

export default LeaderboardList;
