import { FC } from 'react';
import { Leaderboard } from '../../entities';

interface LeaderboardListItemProps {
  leaderboard: Leaderboard;
}

const LeaderboardListItem: FC<LeaderboardListItemProps> = ({ leaderboard }) => {
  return (
    <li className="flex items-center  justify-between">
      <div className="flex space-x-2">
        <img className='rounded-full' width="25" height="25" src={leaderboard.user.avatar} alt="" />
        <p>{leaderboard.user.name}</p>
      </div>
      <p className='font-bold'>{leaderboard.score}</p>
    </li>
  );
};

export default LeaderboardListItem;
