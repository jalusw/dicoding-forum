import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/common/hooks';
import { useParams } from 'react-router-dom';
import { getThreadAsync } from '../../slices/threadSlice';

import Navbar from '@/common/components/ui/navbar';
import ThreadHeader from './ThreadHeader';
import ThreadBody from './ThreadBody';
import AuthenticatedWrapper from '@/common/components/authentication/AuthenticatedWrapper';
import ThreadCommentForm from './ThreadCommentForm';

const ThreadPage: FC = () => {
  const dispatch = useAppDispatch();
  const threadRequestStatus = useAppSelector((state) => state.thread.status);
  const thread = useAppSelector((state) => state.thread.thread);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getThreadAsync(id!));
  }, []);

  if (threadRequestStatus === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <ThreadHeader thread={thread!} />
      <main id="main">
          <ThreadBody thread={thread!} />
        <AuthenticatedWrapper>
          <ThreadCommentForm />
        </AuthenticatedWrapper>
      </main>
    </>
  );
};

export default ThreadPage;
