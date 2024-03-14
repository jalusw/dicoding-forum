import { FC } from 'react';
import { Thread } from '../../entities';
import UpVoteButton from './UpVoteThreadButton';
import DownVoteButton from './DownVoteThreadButton';
import CommentForm from '../comments/CommentForm';

interface ThreadReactionProps {
  thread: Thread;
}

const ThreadReaction: FC<ThreadReactionProps> = ({ thread }) => {
  return (
    <section className="mt-8">
      <div>
        <div className="flex space-x-2">
          <UpVoteButton thread={thread} />
          <DownVoteButton thread={thread} />
        </div>
        <CommentForm thread={thread} />
      </div>
    </section>
  );
};
export default ThreadReaction;
