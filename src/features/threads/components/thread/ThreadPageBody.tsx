import { FC } from 'react';
import { Thread } from '../../entities';
import parse from 'html-react-parser';

interface ThreadPageBodyProps {
  thread: Thread;
}

const ThreadPageBody: FC<ThreadPageBodyProps> = ({ thread }) => {
  const threadBody = parse(thread.body!);
  return <section>{threadBody}</section>;
};

export default ThreadPageBody;
