import { FC } from 'react';
import { Thread } from '../../entities';
import ThreadListItem from './ThreadListItem';

interface ThreadListProps {
  threads: Thread[];
}

const ThreadList: FC<ThreadListProps> = ({ threads }) => {
  return (
    <div className="max-w-screen-sm space-y-8">
      {threads.map((thread) => (
        <ThreadListItem thread={thread} />
      ))}
    </div>
  );
};

export default ThreadList;
