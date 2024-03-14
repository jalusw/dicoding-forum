import { FC } from 'react';
import { Comment, Thread } from '../../entities';
import { useAppDispatch, useAuth } from '@/common/hooks';
import { Button } from '@/common/components/ui/button';
import { useToast } from '@/common/components/ui/use-toast';
import {
  appendCommentDownVote,
  appendCommentUpVote,
  downVoteCommentAsync,
  downVoteThreadAsync,
  neutralizeVoteCommentAsync,
  removeCommentDownVote,
  removeCommentUpVote,
  removeDownVote,
  upVoteCommentAsync,
} from '../../slices/threadSlice';
import ThumbDownIcon from '@/common/components/icons/ThumbDownIcon';
import ThumbDownFilledIcon from '@/common/components/icons/ThumbDownFilledIcon';

interface DownVoteCommentProps {
  comment: Comment;
  thread?: Thread | null;
}

const DownVoteComment: FC<DownVoteCommentProps> = ({ comment, thread }) => {
  const { isAuthenticated, user } = useAuth();

  const totalDownVotes = comment.upVotesBy!.length;

  if (!isAuthenticated) {
    return (
      <Button className="flex items-center " size="sm" variant="outline">
        <ThumbDownIcon />
        <span className="ml-2">{totalDownVotes}</span>
      </Button>
    );
  }

  const hasDownVoted =
    comment.downVotesBy?.filter((userId) => userId === user!.id).length === 1;

  if (hasDownVoted) {
    return <HasDownVotedButton comment={comment} thread={thread} />;
  }

  return <HasNotDownVotedButton comment={comment} thread={thread} />;
};

interface HasDownVotedButtonProps {
  comment: Comment;
  thread?: Thread | null;
}

interface HasNotDownVotedButtonProps {
  comment: Comment;
  thread?: Thread | null;
}

const HasDownVotedButton: FC<HasDownVotedButtonProps> = ({
  comment,
  thread,
}) => {
  const { toast } = useToast();
  const { user, token } = useAuth();
  const dispatch = useAppDispatch();
  const totalDownVotes = comment.downVotesBy!.length;

  const onClick = async () => {
    try {
      dispatch(
        removeCommentDownVote({ commentId: comment.id, userId: user!.id }),
      );
      await dispatch(
        neutralizeVoteCommentAsync({
          threadId: thread?.id!,
          commentId: comment?.id!,
          authToken: token,
        }),
      ).unwrap();
    } catch (error) {
      dispatch(
        appendCommentDownVote({ commentId: comment.id, userId: user!.id }),
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
      <ThumbDownFilledIcon />
      <span className="ml-2">{totalDownVotes}</span>
    </Button>
  );
};

const HasNotDownVotedButton: FC<HasNotDownVotedButtonProps> = ({
  comment,
  thread,
}) => {
  const { toast } = useToast();
  const { user, token } = useAuth();
  const dispatch = useAppDispatch();
  const totalDownVotes = comment.downVotesBy!.length;

  const onClick = async () => {
    try {
      dispatch(
        removeCommentUpVote({ commentId: comment.id, userId: user!.id }),
      );
      dispatch(
        appendCommentDownVote({ commentId: comment.id, userId: user!.id }),
      );
      await dispatch(
        downVoteCommentAsync({
          threadId: thread?.id!,
          commentId: comment?.id!,
          authToken: token,
        }),
      );
    } catch (error) {
      dispatch(
        removeCommentDownVote({ commentId: comment.id, userId: user!.id }),
      );

      toast({
        title: 'Failed',
        description: 'failed to down vote comment',
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
      <ThumbDownIcon />
      <span className="ml-2">{totalDownVotes}</span>
    </Button>
  );
};

export default DownVoteComment;
