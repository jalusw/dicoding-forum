import { FC } from 'react';
import { Thread } from '../../entities';
import { Badge } from '@/common/components/ui/badge';
import { getTimeSinceCreation } from '@/common/utils/datetime';

interface ThreadPageHeaderProps {
  thread: Thread;
}

const ThreadPageHeader: FC<ThreadPageHeaderProps> = ({ thread }) => {
  const parsedCreatedAt = new Date(thread.createdAt);
  const createdSince = getTimeSinceCreation(parsedCreatedAt);

  return (
    <header>
      <div className="prose max-w-full">
        <Badge># {thread.category}</Badge>
        <h1 className="m-0 leading-snug">{thread.title}</h1>
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            width="30"
            height="30"
            src={thread.owner?.avatar}
            alt=""
          />
          <p>
            <span className="mr-2 font-bold">{thread.owner?.name},</span>
            {createdSince}
          </p>
        </div>
      </div>
    </header>
  );
};

export default ThreadPageHeader;
