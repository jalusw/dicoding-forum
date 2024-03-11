import { FC } from 'react';
import { Thread } from '../../entities';
import { getTimeSinceCreation } from '@/common/utils/datetime';
import { Badge } from '@/common/components/ui/badge';

interface ThreadHeaderProps {
  thread: Thread;
}

const ThreadHeader: FC<ThreadHeaderProps> = ({ thread }) => {
  const parsedCreatedAt = new Date(thread?.createdAt!);
  return (
    <header>
      <div className="container">
        <div className=" prose py-16">
          <Badge>{thread.category}</Badge>
          <h1 className="m-0 leading-snug">{thread?.title ?? ''}</h1>
          <div className="flex items-center space-x-4 py-4">
            <img
              className="m-0 rounded-full"
              width="30"
              height="30"
              src={thread?.owner?.avatar}
              alt=""
            />
            <p className='m-0'>{thread?.owner?.name ?? ''},</p>
            <p className='m-0'>{getTimeSinceCreation(parsedCreatedAt)}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ThreadHeader;
