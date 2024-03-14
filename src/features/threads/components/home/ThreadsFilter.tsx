import { useAppSelector } from '@/common/hooks';
import { FC } from 'react';
import ThreadsFilterButton from './ThreadsFilterButton';
import { Skeleton } from '@/common/components/ui/skeleton';

const ThreadsFilter: FC = () => {
  const threads = useAppSelector((state) => state.threads.threads);
  const threadsRequestStatus = useAppSelector((state) => state.threads.status);
  const categories = Array.from(
    new Set(threads.map((thread) => thread.category)),
  );

  if (threadsRequestStatus === 'loading') {
    return <ThreadsFilterLoading />;
  }

  return (
    <section>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <ThreadsFilterButton key={category} category={category!} />
        ))}
      </div>
    </section>
  );
};

const ThreadsFilterLoading: FC = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Skeleton className="h-[28px] w-[100px]" />
      <Skeleton className="h-[28px] w-[125px]" />
      <Skeleton className="h-[28px] w-[100px]" />
    </div>
  );
};

export default ThreadsFilter;
