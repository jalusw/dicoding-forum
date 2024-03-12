import { FC } from 'react';
import { useAppSelector } from '@/common/hooks';
import { NotFoundPage } from '@/common/components';

const ThreadPageError: FC = () => {
  const threadRequestError = useAppSelector((state) => state.thread.error);
  if (threadRequestError === 'thread is not exist') {
    return <NotFoundPage />;
  }

  return <p>Something went wrong</p>;
};

export default ThreadPageError;
