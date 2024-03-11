import { FC, useState } from 'react';
import { Editor } from '@/common/components';
import { Button } from '@/common/components/ui/button';
import { useAppDispatch, useAuth } from '@/common/hooks';
import { useNavigate } from 'react-router-dom';
import { createCommentAsync, getThreadAsync } from '../../slices/threadSlice';
import { Thread } from '../../entities';

interface CommentFormProps {
  thread: Thread;
}

const CommentForm: FC<CommentFormProps> = ({ thread }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthenticated, token } = useAuth();
  const [comment, setComment] = useState('');
  const onSubmit = async (event: { preventDefault: () => void }) => {
    try {
      event.preventDefault();
      if (!isAuthenticated) {
        return navigate('/login');
      }
      const commentPayload = {
        content: comment,
      };
      await dispatch(
        createCommentAsync({
          data: commentPayload,
          threadId: thread.id!,
          authToken: token,
        }),
      );
      await dispatch(getThreadAsync(thread.id!));
    } catch (error) {
      alert('Failed to post comment');
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Editor
          className="mt-4 h-[100px]"
          onChange={({ target }) => {
            setComment(target.innerHTML);
          }}
        />
        <Button className="mt-4">Post It !</Button>
      </form>
    </div>
  );
};

export default CommentForm;
