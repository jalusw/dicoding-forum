import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/common/hooks';
import { useParams } from 'react-router-dom';
import { getThreadAsync } from '../../slices/threadSlice';
import parse from 'html-react-parser';

import Navbar from '@/common/components/ui/navbar';

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
      <header>
        <div className="container">
          <div className=" prose py-16 ">
            <h1 className="m-0 leading-snug">{thread?.title ?? ''}</h1>
            <div className="flex items-center space-x-4">
              <img
                className="rounded-full "
                width="40"
                height="40"
                src={thread?.owner?.avatar}
                alt=""
              />
              <p>Oleh, {thread?.owner?.name ?? ''}</p>
            </div>
          </div>
        </div>
      </header>
      <main id="main">
        <div className="container">
          <div className="prose">{parse(thread?.body ?? '')}</div>
        </div>
      </main>
    </>
  );
};

export default ThreadPage;
