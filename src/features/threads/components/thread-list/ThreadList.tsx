import { FC } from 'react';
import { Thread } from '../../entities';
import ThreadListItem from './ThreadListItem';

interface ThreadListProps {
  threads: Thread[];
}

const ThreadList: FC<ThreadListProps> = ({ threads }) => {
  return (
    <div className='space-y-8 max-w-screen-sm'>
      {threads.map((thread) => (
        <ThreadListItem thread={thread} />
      ))}
    </div>
  );
};

export default ThreadList;
