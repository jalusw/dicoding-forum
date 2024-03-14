import { useAppDispatch, useAppSelector } from '@/common/hooks';
import { FC, useEffect } from 'react';
import { getThreadsAsync } from '../../slices/threadsSlice';
import { getUsersAsync } from '@/features/authentication/slices/usersSlice';
import ThreadList from '../thread-list/ThreadList';
import { Skeleton } from '@/common/components/ui/skeleton';

const ThreadListSection: FC = () => {
  const dispatch = useAppDispatch();
  const threads = useAppSelector((state) => state.threads.threads);
  const threadsRequestStatus = useAppSelector((state) => state.threads.status);
  const threadsFilter = useAppSelector((state) => state.threads.filter);
  const usersRequestStatus = useAppSelector((state) => state.users.status);

  useEffect(() => {
    dispatch(getThreadsAsync());
    dispatch(getUsersAsync());
  }, []);

  if (threadsRequestStatus === 'loading' || usersRequestStatus === 'loading') {
    return <ThreadListSectionLoading />;
  }

  if (threadsFilter.category !== null) {
    const filteredThreads = threads.filter(
      (thread) => thread.category === threadsFilter.category,
    );
    return <ThreadList threads={filteredThreads} />;
  }

  return <ThreadList threads={threads} />;
};

const ThreadListSectionLoading: FC = () => {
  return (
    <div className="space-y-4">
      <div className="w-full rounded-md p-4 shadow-border">
        <Skeleton className="h-[20px] w-[75px]" />
        <Skeleton className="mt-6 h-[24px] w-full max-w-[200px] " />
        <div className="mt-4 flex space-x-2">
          <Skeleton className="h-[25px] w-[25px] rounded-full " />
          <Skeleton className="h-[24px] w-[120px] " />
          <Skeleton className="h-[24px] w-[120px] " />
        </div>
        <div className="mt-4 flex w-full flex-col space-y-2">
          <Skeleton className="h-[24px] w-full max-w-[480px] " />
          <Skeleton className="h-[24px] w-full max-w-[465px] " />
          <Skeleton className="h-[24px] w-full max-w-[465px] " />
        </div>
        <div className="mt-4 flex space-x-4">
          <Skeleton className="h-[32px] w-full max-w-[80px] " />
          <Skeleton className="h-[32px] w-full max-w-[80px] " />
          <Skeleton className="h-[32px] w-full max-w-[80px] " />
        </div>
      </div>
      <div className="w-full rounded-md p-4 shadow-border">
        <Skeleton className="h-[20px] w-[75px]" />
        <Skeleton className="mt-6 h-[24px] w-full max-w-[200px] " />
        <div className="mt-4 flex space-x-2">
          <Skeleton className="h-[25px] w-[25px] rounded-full " />
          <Skeleton className="h-[24px] w-[120px] " />
          <Skeleton className="h-[24px] w-[120px] " />
        </div>
        <div className="mt-4 flex w-full flex-col space-y-2">
          <Skeleton className="h-[24px] w-full max-w-[480px] " />
          <Skeleton className="h-[24px] w-full max-w-[465px] " />
          <Skeleton className="h-[24px] w-full max-w-[465px] " />
        </div>
        <div className="mt-4 flex space-x-4">
          <Skeleton className="h-[32px] w-full max-w-[80px] " />
          <Skeleton className="h-[32px] w-full max-w-[80px] " />
          <Skeleton className="h-[32px] w-full max-w-[80px] " />
        </div>
      </div>
      <div className="w-full rounded-md p-4 shadow-border">
        <Skeleton className="h-[20px] w-[75px]" />
        <Skeleton className="mt-6 h-[24px] w-full max-w-[200px] " />
        <div className="mt-4 flex space-x-2">
          <Skeleton className="h-[25px] w-[25px] rounded-full " />
          <Skeleton className="h-[24px] w-[120px] " />
          <Skeleton className="h-[24px] w-[120px] " />
        </div>
        <div className="mt-4 flex w-full flex-col space-y-2">
          <Skeleton className="h-[24px] w-full max-w-[480px] " />
          <Skeleton className="h-[24px] w-full max-w-[465px] " />
          <Skeleton className="h-[24px] w-full max-w-[465px] " />
        </div>
        <div className="mt-4 flex space-x-4">
          <Skeleton className="h-[32px] w-full max-w-[80px] " />
          <Skeleton className="h-[32px] w-full max-w-[80px] " />
          <Skeleton className="h-[32px] w-full max-w-[80px] " />
        </div>
      </div>
    </div>
  );
};

export default ThreadListSection;
