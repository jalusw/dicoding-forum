import { FC } from 'react';
import { Comment, Thread } from '../../entities';
import CommentListItem from './CommentListItem';

interface CommentListProps {
  comments: Comment[];
  thread?: Thread | null;
}

const CommentList: FC<CommentListProps> = ({ comments, thread }) => {
  return (
    <div className="space-y-8">
      {comments.map((comment) => (
        <CommentListItem key={comment.id} comment={comment} thread={thread} />
      ))}
    </div>
  );
};
export default CommentList;
