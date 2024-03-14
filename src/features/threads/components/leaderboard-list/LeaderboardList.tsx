import { useAppDispatch, useAppSelector } from '@/common/hooks';
import { FC, useEffect } from 'react';
import { getLeaderboardsAsync } from '../../slices/leaderboardsSlice';
import LeaderboardListItem from './LeaderboardListItem';
import { Skeleton } from '@/common/components/ui/skeleton';

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
    return (
      <>
        <h2 className="font-bold">Leaderboards</h2>
        <LeaderboardListLoading />
      </>
    );
  }

  return (
    <section>
      <h2 className="font-bold">Leaderboards</h2>
      <ul className="mt-4 flex flex-col space-y-2">
        {leaderboards.map((leaderboard) => (
          <LeaderboardListItem
            key={leaderboard.user.id}
            leaderboard={leaderboard}
          />
        ))}
      </ul>
    </section>
  );
};

const LeaderboardListLoading: FC = () => {
  return (
    <div className="mt-4 flex flex-col space-y-2">
      <div className="flex justify-between">
        <div className="flex space-x-2">
          <Skeleton className="h-[18px] w-[18px] rounded-full"></Skeleton>
          <Skeleton className="h-[18px] w-[100px]"></Skeleton>
        </div>
        <Skeleton className="h-[18px] w-[45px]"></Skeleton>
      </div>
      <div className="flex justify-between">
        <div className="flex space-x-2">
          <Skeleton className="h-[18px] w-[18px] rounded-full"></Skeleton>
          <Skeleton className="h-[18px] w-[100px]"></Skeleton>
        </div>
        <Skeleton className="h-[18px] w-[45px]"></Skeleton>
      </div>
      <div className="flex justify-between">
        <div className="flex space-x-2">
          <Skeleton className="h-[18px] w-[18px] rounded-full"></Skeleton>
          <Skeleton className="h-[18px] w-[100px]"></Skeleton>
        </div>
        <Skeleton className="h-[18px] w-[45px]"></Skeleton>
      </div>
      <div className="flex justify-between">
        <div className="flex space-x-2">
          <Skeleton className="h-[18px] w-[18px] rounded-full"></Skeleton>
          <Skeleton className="h-[18px] w-[100px]"></Skeleton>
        </div>
        <Skeleton className="h-[18px] w-[45px]"></Skeleton>
      </div>
    </div>
  );
};

export default LeaderboardList;
