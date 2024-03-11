import { FC } from 'react';
import { Thread } from '../../entities';
import UpVoteButton from '../reactions/UpVoteButton';
import DownVoteButton from '../reactions/DownVoteButton';
import CommentForm from '../reactions/CommentForm';

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
