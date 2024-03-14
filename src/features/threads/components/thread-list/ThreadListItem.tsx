import { FC } from 'react';
import { Thread } from '../../entities';
import { Link } from 'react-router-dom';
import { Badge } from '@/common/components/ui/badge';
import CommentIcon from '@/common/components/icons/CommentIcon';
import parse from 'html-react-parser';
import { useAppSelector } from '@/common/hooks';
import { getTimeSinceCreation } from '@/common/utils/datetime';
import UpVoteThreadListItemButton from './UpVoteThreadListItemButton';
import DownVoteThreadListItemButton from './DownVoteThreadListItemButton';

interface ThreadListItem {
  thread: Thread;
}

const ThreadListItem: FC<ThreadListItem> = ({ thread }) => {
  const users = useAppSelector((state) => state.users.users);
  const user = users[thread.ownerId];
  const createdAt = new Date(thread.createdAt);
  const createdSince = getTimeSinceCreation(createdAt);
  return (
    <article className="prose max-w-full rounded-xl p-6 shadow-border">
      <header>
        <div className="mb-4 flex">
          <Badge variant="outline"># {thread.category}</Badge>
        </div>
        <Link to={`/thread/${thread.id}`}>
          <strong className="m-0 text-lg">{thread.title}</strong>
        </Link>
        <div className="mt-2 flex items-center space-x-2">
          <img
            className="m-0 rounded-full"
            width="25"
            height="25"
            src={user.avatar}
            alt=""
          />
          <p className="m-0">
            <span className="font-bold">{user.name}</span>, {createdSince}
          </p>
        </div>
      </header>
      <section>
        <p className="line-clamp-6 leading-relaxed">
          {parse(thread?.body ?? '')}
        </p>
      </section>
      <footer>
        <div className="flex flex-wrap gap-3">
          <UpVoteThreadListItemButton thread={thread} />
          <DownVoteThreadListItemButton thread={thread} />
          <div className="flex items-center">
            <CommentIcon />
            <span className="ml-2">{thread.totalComments ?? 0}</span>
          </div>
        </div>
      </footer>
    </article>
  );
};
export default ThreadListItem;
