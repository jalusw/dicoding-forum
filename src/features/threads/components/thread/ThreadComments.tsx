import { FC } from 'react';
import { Thread } from '../../entities';
import CommentList from '../comment-list/CommentList';

interface ThreadCommentsProps {
  thread: Thread;
}

const ThreadComments: FC<ThreadCommentsProps> = ({ thread }) => {
  const totalComments = thread.comments?.length ?? 0;
  return (
    <section className="mt-8">
      <h2 className="text-md font-bold">Comments ({totalComments})</h2>
      <div className="mt-8">
        <CommentList comments={thread.comments!} />
      </div>
    </section>
  );
};
export default ThreadComments;
