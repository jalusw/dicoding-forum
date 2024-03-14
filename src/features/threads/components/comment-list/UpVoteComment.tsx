import { FC } from 'react';
import { Comment, Thread } from '../../entities';
import { useAppDispatch, useAuth } from '@/common/hooks';
import { Button } from '@/common/components/ui/button';
import ThumbUpIcon from '@/common/components/icons/ThumbUpIcon';
import ThumbUpFilledIcon from '@/common/components/icons/ThumbUpFilledIcon';
import { useToast } from '@/common/components/ui/use-toast';
import {
  appendCommentUpVote,
  neutralizeVoteCommentAsync,
  removeCommentDownVote,
  removeCommentUpVote,
  upVoteCommentAsync,
} from '../../slices/threadSlice';

interface UpVoteCommentProps {
  comment: Comment;
  thread?: Thread | null;
}

const UpVoteComment: FC<UpVoteCommentProps> = ({ comment, thread }) => {
  const { isAuthenticated, user } = useAuth();

  const totalUpVotes = comment.upVotesBy!.length;

  if (!isAuthenticated) {
    return (
      <Button className="flex items-center " size="sm" variant="outline">
        <ThumbUpIcon />
        <span className="ml-2">{totalUpVotes}</span>
      </Button>
    );
  }

  const hasUpVoted =
    comment.upVotesBy?.filter((userId) => userId === user!.id).length === 1;

  if (hasUpVoted) {
    return <HasUpVotedButton comment={comment} thread={thread} />;
  }

  return <HasNotUpVotedButton comment={comment} thread={thread} />;
};

interface HasUpVotedButtonProps {
  comment: Comment;
  thread?: Thread | null;
}

interface HasNotUpVotedButtonProps {
  comment: Comment;
  thread?: Thread | null;
}

const HasUpVotedButton: FC<HasUpVotedButtonProps> = ({ comment, thread }) => {
  const { toast } = useToast();
  const { user, token } = useAuth();
  const dispatch = useAppDispatch();
  const totalUpVotes = comment.upVotesBy!.length;

  const onClick = async () => {
    try {
      dispatch(
        removeCommentUpVote({ commentId: comment.id, userId: user!.id }),
      );
      await dispatch(
        neutralizeVoteCommentAsync({
          threadId: thread!.id!,
          commentId: comment!.id!,
          authToken: token,
        }),
      );
    } catch (error) {
      dispatch(
        appendCommentUpVote({ commentId: comment.id, userId: user!.id }),
      );
      toast({
        title: 'Failed',
        description: 'failed to neutralize comment vote',
        variant: 'destructive',
      });
    }
  };

  return (
    <Button
      className="flex items-center"
      onClick={onClick}
      size="sm"
      variant="outline"
    >
      <ThumbUpFilledIcon />
      <span className="ml-2">{totalUpVotes}</span>
    </Button>
  );
};

const HasNotUpVotedButton: FC<HasNotUpVotedButtonProps> = ({
  comment,
  thread,
}) => {
  const { toast } = useToast();
  const { user, token } = useAuth();
  const dispatch = useAppDispatch();
  const totalUpVotes = comment.upVotesBy!.length;

  const onClick = async () => {
    try {
      dispatch(
        removeCommentDownVote({ commentId: comment.id, userId: user!.id }),
      );
      dispatch(
        appendCommentUpVote({ commentId: comment.id, userId: user!.id }),
      );
      await dispatch(
        upVoteCommentAsync({
          threadId: thread!.id!,
          commentId: comment!.id!,
          authToken: token,
        }),
      );
    } catch (error) {
      dispatch(
        removeCommentUpVote({ commentId: comment.id, userId: user!.id }),
      );
      toast({
        title: 'Failed',
        description: 'failed to up vote comment vote',
        variant: 'destructive',
      });
    }
  };

  return (
    <Button
      className="flex items-center"
      onClick={onClick}
      size="sm"
      variant="outline"
    >
      <ThumbUpIcon />
      <span className="ml-2">{totalUpVotes}</span>
    </Button>
  );
};

export default UpVoteComment;
