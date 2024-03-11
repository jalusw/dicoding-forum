import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/common/hooks';
import { useParams } from 'react-router-dom';
import { getThreadAsync } from '../../slices/threadSlice';

import Navbar from '@/common/components/ui/navbar';
import ThreadPageLoading from './ThreadPageLoading';
import ThreadPageHeader from './ThreadPageHeader';
import ThreadPageContainer from './ThreadPageContainer';
import ThreadPageBody from './ThreadPageBody';
import ThreadComments from './ThreadComments';
import ThreadReaction from './ThreadReaction';
import ThreadPageError from './ThreadPageError';
import { useToast } from '@/common/components/ui/use-toast';

const ThreadPage: FC = () => {
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const threadRequestStatus = useAppSelector((state) => state.thread.status);
  const thread = useAppSelector((state) => state.thread.thread);
  const { id } = useParams();


  useEffect(() => {
    dispatch(getThreadAsync(id!));
  }, []);

  if (threadRequestStatus === 'loading') {
    return <ThreadPageLoading />;
  }

  if (threadRequestStatus === 'failed') {
    return <ThreadPageError />;
  }

  return (
    <>
      <Navbar />
      <ThreadPageContainer>
        <ThreadPageHeader thread={thread} />
        <main>
          <ThreadPageBody thread={thread} />
          <ThreadReaction thread={thread} />
          <ThreadComments thread={thread} />
        </main>
      </ThreadPageContainer>
    </>
  );
};

export default ThreadPage;
