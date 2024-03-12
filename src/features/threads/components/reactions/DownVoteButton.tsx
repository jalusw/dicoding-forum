import { Button } from '@/common/components/ui/button';
import { FC } from 'react';
import { Thread } from '../../entities';
import ThumbDownIcon from '@/common/components/icons/ThumbDownIcon';
import { useAppDispatch, useAuth } from '@/common/hooks';
import { useNavigate } from 'react-router-dom';
import ThumbDownFilledIcon from '@/common/components/icons/ThumbDownFilledIcon';
import { downVoteThreadAsync, getThreadAsync } from '../../slices/threadSlice';
import { toast } from '@/common/components/ui/use-toast';

interface DownVoteButton {
  thread: Thread;
}

const DownVoteButton: FC<DownVoteButton> = ({ thread }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const totalDownVotes = thread.downVotesBy!.length;
  const { isAuthenticated, user, token } = useAuth();

  const onClick = async () => {
    try{
      if (!isAuthenticated) {
        return navigate('/login');
      }
      await dispatch(downVoteThreadAsync({ threadId: thread.id!, authToken: token }));
      await dispatch(getThreadAsync(thread.id!));
    }catch(error){
      toast({
        title: "Failed",
        description: "Failed to down vote the thread",
        variant: "destructive"
      });
    }
  };

  const hasVoted = thread.downVotesBy?.filter((userId) => userId === user?.id);

  if (hasVoted!.length > 0) {
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
