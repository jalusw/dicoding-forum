import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAuth } from '@/common/hooks';

import { Button } from '@/common/components/ui/button';

import { Thread } from '../../entities';

import {
  appendUpVote,
  neutralizeVoteThreadAsync,
  removeDownVote,
  removeUpVote,
  upVoteThreadAsync,
} from '../../slices/threadSlice';
import { toast } from '@/common/components/ui/use-toast';
import ThumbUpIcon from '@/common/components/icons/ThumbUpIcon';
import ThumbUpFilledIcon from '@/common/components/icons/ThumbUpFilledIcon';

interface UpVoteThreadButton {
  thread: Thread;
}

const UpVoteThreadButton: FC<UpVoteThreadButton> = ({ thread }) => {
  const navigate = useNavigate();
  const totalUpVotes = thread.upVotesBy!.length;
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    const redirectToLogin = () => navigate('/login');
    return (
      <Button
        className="flex items-center"
        onClick={redirectToLogin}
        variant="outline"
      >
        <ThumbUpIcon />
        <span className="ml-2">{totalUpVotes}</span>
      </Button>
    );
  }

  const hasUpVoted =
    thread.upVotesBy!.filter((userId) => userId === user!.id).length === 1;

  if (hasUpVoted) {
    return <HasUpVotedButton thread={thread} />;
  }

  return <HasNotUpVotedButton thread={thread} />;
};

interface HasUpVotedButtonInterface {
  thread: Thread;
}

interface HasNotUpVotedButtonInterface {
  thread: Thread;
}

const HasUpVotedButton: FC<HasUpVotedButtonInterface> = ({ thread }) => {
  const totalUpVotes = thread.upVotesBy!.length;
  const { user, token } = useAuth();
  const dispatch = useAppDispatch();
  const onClick = async () => {
    try {
      dispatch(removeUpVote(user!.id));
      await dispatch(
        neutralizeVoteThreadAsync({
          threadId: thread.id!,
          authToken: token,
        }),
      );
    } catch (error) {
      dispatch(appendUpVote(user!.id));
      toast({
        title: 'Failed',
        description: 'Failed to neutralize vote',
        variant: 'destructive',
      });
    }
  };
  return (
    <Button className="flex items-center" onClick={onClick} variant="outline">
      <ThumbUpFilledIcon />
      <span className="ml-2">{totalUpVotes}</span>
    </Button>
  );
};

const HasNotUpVotedButton: FC<HasNotUpVotedButtonInterface> = ({ thread }) => {
  const totalUpVotes = thread.upVotesBy!.length;
  const { user, token } = useAuth();
  const dispatch = useAppDispatch();
  const onClick = async () => {
    try {
      dispatch(appendUpVote(user!.id));
      dispatch(removeDownVote(user!.id));
      await dispatch(
        upVoteThreadAsync({
          threadId: thread.id!,
          authToken: token,
        }),
      );
    } catch (error) {
      dispatch(removeUpVote(user!.id));
      toast({
        title: 'Failed',
        description: 'Failed to up vote',
        variant: 'destructive',
      });
    }
  };

  return (
    <Button className="flex items-center" onClick={onClick} variant="outline">
      <ThumbUpIcon />
      <span className="ml-2">{totalUpVotes}</span>
    </Button>
  );
};

export default UpVoteThreadButton;
