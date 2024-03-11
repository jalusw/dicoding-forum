import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/common/hooks';
import { useParams } from 'react-router-dom';
import { getThreadAsync } from '../../slices/threadSlice';
import parse from 'html-react-parser';

import Navbar from '@/common/components/ui/navbar';
import ThreadHeader from './ThreadHeader';

const ThreadPage: FC = () => {
  const dispatch = useAppDispatch();
  const threadRequestStatus = useAppSelector((state) => state.thread.status);
  const thread = useAppSelector((state) => state.thread.thread);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getThreadAsync(id));
  }, []);

  if (threadRequestStatus === 'loading') {
    return <p>Loading...</p>;
  }



  return (
    <>
      <Navbar />
      <ThreadHeader thread={thread!}/>
      <main id="main">
        <div className="container">
          <div className="prose">{parse(thread?.body ?? '')}</div>
        </div>
      </main>
    </>
  );
};

export default ThreadPage;
