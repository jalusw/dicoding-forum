import ThumbUpIcon from '@/common/components/icons/ThumbUpIcon';
import { Button } from '@/common/components/ui/button';
import { FC } from 'react';
import { Thread } from '../../entities';
import { useAuth } from '@/common/hooks';
import { useNavigate } from 'react-router-dom';

interface UpVoteButton {
  thread: Thread;
}

const UpVoteButton: FC<UpVoteButton> = ({ thread }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const totalUpVotes = thread.upVotesBy!.length;
  const onClick = () => {
    if (!isAuthenticated) {
      return navigate('/login');
    }
  };
  return (
    <Button className="flex items-center" onClick={onClick} variant="outline">
      <ThumbUpIcon />
      <span className="ml-2">{totalUpVotes}</span>
    </Button>
  );
};
export default UpVoteButton;
