import { FC } from 'react';
import { Thread } from '../../entities';
import parse from 'html-react-parser';

interface ThreadBodyProps {
  thread: Thread;
}

const ThreadBody: FC<ThreadBodyProps> = ({ thread }) => {
  return (
    <section>
      <div className="container py-16">
        <div className="prose">{parse(thread?.body ?? '')}</div>
      </div>
    </section>
  );
};

export default ThreadBody;
