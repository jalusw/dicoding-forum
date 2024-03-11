import { FC } from 'react';
import { Thread } from '../../entities';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import { Badge } from '@/common/components/ui/badge';
import { Button } from '@/common/components/ui/button';
import ThumbUpIcon from '@/common/components/icons/ThumbUpIcon';
import ThumbDownIcon from '@/common/components/icons/ThumbDownIcon';
import CommentIcon from '@/common/components/icons/CommentIcon';
import UpVoteButton from '../reactions/UpVoteButton';
import DownVoteButton from '../reactions/DownVoteButton';

interface ThreadListItem {
  thread: Thread;
}

const ThreadListItem: FC<ThreadListItem> = ({ thread }) => {
  return (
    <article className="prose max-w-full rounded-xl p-6 shadow-border">
      <header>
        <div className="mb-4 flex">
          <Badge>{thread.category}</Badge>
        </div>
        <Link to={`/thread/${thread.id}`}>
          <strong className="m-0 text-lg">{thread.title}</strong>
        </Link>
        <p className="m-0">Oleh, {thread.ownerId}</p>
      </header>
      <section>
        <p className="line-clamp-6 leading-relaxed">
          {parse(thread?.body ?? '')}
        </p>
      </section>
      <footer>
        <div className="flex flex-wrap gap-3">
          <UpVoteButton thread={thread} />
          <DownVoteButton thread={thread} />
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
