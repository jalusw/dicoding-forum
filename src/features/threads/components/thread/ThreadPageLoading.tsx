import Navbar from '@/common/components/ui/navbar';
import { Skeleton } from '@/common/components/ui/skeleton';
import { FC } from 'react';
import ThreadPageContainer from './ThreadPageContainer';

const ThreadPageLoading: FC = () => {
  return (
    <>
      <Navbar />
      <ThreadPageContainer>
        <header className="py-16">
          <Skeleton className="h-[20px] w-[100px] rounded-full" />
          <Skeleton className="mt-4 h-[28px] w-[450px] rounded-full" />
          <div className="mt-4 flex items-center space-x-4">
            <Skeleton className="h-[20px] w-[20px] rounded-full" />
            <Skeleton className="h-[20px] w-[180px] rounded-full" />
            <Skeleton className="h-[20px] w-[100px] rounded-full" />
          </div>
        </header>
        <main>
          <div className="space-y-4">
            <Skeleton className="h-[18px] w-full  rounded-full" />
            <Skeleton className="h-[18px] w-[90%]  rounded-full" />
            <Skeleton className="h-[18px] w-[85%]  rounded-full" />
            <Skeleton className="h-[18px] w-[88%]  rounded-full" />
            <Skeleton className="h-[18px] w-[86%]  rounded-full" />
            <Skeleton className="h-[18px] w-[84%]  rounded-full" />
          </div>
          <div className="mt-16">
            <Skeleton className="h-[26px] w-[150px] rounded-full" />
            <div className="mt-8 space-y-8">
              <div>
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-[20px] w-[20px] rounded-full" />
                  <Skeleton className="h-[20px] w-[180px] rounded-full" />
                </div>
                <div className="mt-4 space-y-2">
                  <Skeleton className="h-[18px] w-[85%]  rounded-full" />
                  <Skeleton className="h-[18px] w-[75%]  rounded-full" />
                  <Skeleton className="h-[18px] w-[60%]  rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-[20px] w-[20px] rounded-full" />
                  <Skeleton className="h-[20px] w-[180px] rounded-full" />
                </div>
                <div className="mt-4 space-y-2">
                  <Skeleton className="h-[18px] w-[85%]  rounded-full" />
                  <Skeleton className="h-[18px] w-[75%]  rounded-full" />
                  <Skeleton className="h-[18px] w-[60%]  rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </ThreadPageContainer>
    </>
  );
};
export default ThreadPageLoading;
