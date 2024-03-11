import { FC } from 'react';
import { Comment } from '../../entities';
import parse from 'html-react-parser';
import { getTimeSinceCreation } from '@/common/utils/datetime';

interface CommentListItemProps {
  comment: Comment;
}

const CommentListItem: FC<CommentListItemProps> = ({ comment }) => {
  const username = comment.owner?.name ?? '';
  const avatar = comment.owner?.avatar;
  const createdAt = new Date(comment.createdAt!);
  const createdSince = getTimeSinceCreation(createdAt);
  const content = parse(comment.content ?? '');
  return (
    <article>
      <header>
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            width="25"
            height="25"
            src={avatar}
            alt=""
          />
          <strong>{username}</strong>
        </div>
        <p>
          <span>{createdSince}</span>
        </p>
      </header>
      <section className="mt-4">{content}</section>
    </article>
  );
};

export default CommentListItem;
