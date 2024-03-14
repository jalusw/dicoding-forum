import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAuth } from '@/common/hooks';

import { Button } from '@/common/components/ui/button';

import { Thread } from '../../entities';
import ThumbDownIcon from '@/common/components/icons/ThumbDownIcon';
import ThumbDownFilledIcon from '@/common/components/icons/ThumbDownFilledIcon';
import {
  appendDownVote,
  downVoteThreadAsync,
  neutralizeVoteThreadAsync,
  removeDownVote,
  removeUpVote,
} from '../../slices/threadSlice';
import { toast } from '@/common/components/ui/use-toast';

interface DownVoteThreadButton {
  thread: Thread;
}

const DownVoteThreadButton: FC<DownVoteThreadButton> = ({ thread }) => {
  const navigate = useNavigate();
  const totalDownVotes = thread.downVotesBy!.length;
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    const redirectToLogin = () => navigate('/login');
    return (
      <Button
        className="flex items-center"
        onClick={redirectToLogin}
        variant="outline"
      >
        <ThumbDownIcon />
        <span className="ml-2">{totalDownVotes}</span>
      </Button>
    );
  }

  const hasDownVoted =
    thread.downVotesBy!.filter((userId) => userId === user!.id).length === 1;

  if (hasDownVoted) {
    return <HasDownVotedButton thread={thread} />;
  }

  return <HasNotDownVotedButton thread={thread} />;
};

interface HasDownVotedButtonInterface {
  thread: Thread;
}

interface HasNotDownVotedButtonInterface {
  thread: Thread;
}

const HasDownVotedButton: FC<HasDownVotedButtonInterface> = ({ thread }) => {
  const totalDownVotes = thread.downVotesBy!.length;
  const { user, token } = useAuth();
  const dispatch = useAppDispatch();
  const onClick = async () => {
    try {
      dispatch(removeDownVote(user!.id));
      await dispatch(
        neutralizeVoteThreadAsync({
          threadId: thread.id!,
          authToken: token,
        }),
      );
    } catch (error) {
      dispatch(appendDownVote(user!.id));
      toast({
        title: 'Failed',
        description: 'Failed to neutralize vote',
        variant: 'destructive',
      });
    }
  };
  return (
    <Button className="flex items-center" onClick={onClick} variant="outline">
      <ThumbDownFilledIcon />
      <span className="ml-2">{totalDownVotes}</span>
    </Button>
  );
};

const HasNotDownVotedButton: FC<HasNotDownVotedButtonInterface> = ({
  thread,
}) => {
  const totalDownVotes = thread.downVotesBy!.length;
  const { user, token } = useAuth();
  const dispatch = useAppDispatch();
  const onClick = async () => {
    try {
      dispatch(appendDownVote(user!.id));
      dispatch(removeUpVote(user!.id));
      await dispatch(
        downVoteThreadAsync({
          threadId: thread.id!,
          authToken: token,
        }),
      );
    } catch (error) {
      dispatch(removeDownVote(user!.id));
      toast({
        title: 'Failed',
        description: 'Failed to down vote',
        variant: 'destructive',
      });
    }
  };

  return (
    <Button className="flex items-center" onClick={onClick} variant="outline">
      <ThumbDownIcon />
      <span className="ml-2">{totalDownVotes}</span>
    </Button>
  );
};

export default DownVoteThreadButton;
