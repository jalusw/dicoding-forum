import { Button } from '@/common/components/ui/button';
import { FC } from 'react';
import { Thread } from '../../entities';
import ThumbDownIcon from '@/common/components/icons/ThumbDownIcon';
import { useAuth } from '@/common/hooks';
import { useNavigate } from 'react-router-dom';
import ThumbDownFilledIcon from '@/common/components/icons/ThumbDownFilledIcon';

interface DownVoteButton {
  thread: Thread;
}

const DownVoteButton: FC<DownVoteButton> = ({ thread }) => {
  const navigate = useNavigate();
  const totalDownVotes = thread.downVotesBy!.length;
  const { isAuthenticated, user } = useAuth();

  const onClick = () => {
    if (!isAuthenticated) {
      return navigate('/login');
    }
  };
  const hasVoted = thread.downVotesBy?.filter((userId) => userId === user?.id);

  if (hasVoted?.length > 0) {
    return (
      <Button className="flex items-center" onClick={onClick} variant="outline">
        <ThumbDownFilledIcon />
        <span className="ml-2">{totalDownVotes}</span>
      </Button>
    );
  }

  return (
    <Button className="flex items-center" onClick={onClick} variant="outline">
      <ThumbDownIcon />
      <span className="ml-2">{totalDownVotes}</span>
    </Button>
  );
};
export default DownVoteButton;
