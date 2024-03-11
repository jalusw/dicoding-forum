import { FC } from 'react';
import { Comment } from '../../entities';
import CommentListItem from './CommentListItem';

interface CommentListProps {
  comments: Comment[];
}

const CommentList: FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="space-y-8">
      {comments.map((comment) => (
        <CommentListItem comment={comment} />
      ))}
    </div>
  );
};
export default CommentList;
