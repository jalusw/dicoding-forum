import { useAppSelector } from '@/common/hooks';
import { FC } from 'react';
import ThreadsFilterButton from './ThreadsFilterButton';

const ThreadsFilter: FC = () => {
  const threads = useAppSelector((state) => state.threads.threads);
  const threadsRequestStatus = useAppSelector((state) => state.threads.status);
  const categories = Array.from(
    new Set(threads.map((thread) => thread.category)),
  );

  if (threadsRequestStatus === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <div className="flex flex-wrap">
        {categories.map((category) => (
          <ThreadsFilterButton category={category!} />
        ))}
      </div>
    </section>
  );
};


export default ThreadsFilter;
