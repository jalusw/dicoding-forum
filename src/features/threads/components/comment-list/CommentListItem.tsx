import { FC } from 'react';
import { Comment, Thread } from '../../entities';
import parse from 'html-react-parser';
import { getTimeSinceCreation } from '@/common/utils/datetime';
import UpVoteComment from './UpVoteComment';
import DownVoteComment from './DownVoteComment';

interface CommentListItemProps {
  comment: Comment;
  thread?: Thread | null;
}

const CommentListItem: FC<CommentListItemProps> = ({ comment, thread }) => {
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
      <footer className="mt-4">
        <div className="flex space-x-2">
          <UpVoteComment comment={comment} thread={thread} />
          <DownVoteComment comment={comment} thread={thread} />
        </div>
      </footer>
    </article>
  );
};

export default CommentListItem;
