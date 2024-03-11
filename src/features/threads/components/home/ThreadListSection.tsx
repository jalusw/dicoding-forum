import { useAppDispatch, useAppSelector } from '@/common/hooks';
import { FC, useEffect } from 'react';
import { getThreadsAsync } from '../../slices/threadsSlice';
import ThreadList from '../thread-list/ThreadList';

const ThreadListSection: FC = () => {
  const dispatch = useAppDispatch();
  const threads = useAppSelector((state) => state.threads.threads);
  const threadsRequestStatus = useAppSelector((state) => state.threads.status);

  useEffect(() => {
    dispatch(getThreadsAsync());
  }, []);

  if (threadsRequestStatus === 'loading') {
    return <p>Loading...</p>;
  }

  return <ThreadList threads={threads} />;
};

export default ThreadListSection;
