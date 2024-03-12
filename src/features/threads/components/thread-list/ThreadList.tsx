import { FC } from 'react';
import { Thread } from '../../entities';
import ThreadListItem from './ThreadListItem';

interface ThreadListProps {
  threads: Thread[];
}

const ThreadList: FC<ThreadListProps> = ({ threads }) => {
  return (
    <div className="space-y-8">
      {threads.map((thread) => (
        <ThreadListItem key={thread.id} thread={thread} />
      ))}
    </div>
  );
};

export default ThreadList;
