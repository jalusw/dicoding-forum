import { FC, useState } from 'react';
import { Editor } from '@/common/components';
import { Button } from '@/common/components/ui/button';
import { useAppDispatch, useAuth } from '@/common/hooks';
import { useNavigate } from 'react-router-dom';
import {
  appendComment,
  createCommentAsync,
  removeComment,
} from '../../slices/threadSlice';
import { Thread } from '../../entities';
import { useToast } from '@/common/components/ui/use-toast';
import { nanoid } from '@reduxjs/toolkit';

interface CommentFormProps {
  thread: Thread;
}

const CommentForm: FC<CommentFormProps> = ({ thread }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const { isAuthenticated, user, token } = useAuth();
  const [comment, setComment] = useState('');
  const onSubmit = async (event: { preventDefault: () => void }) => {
    const commentId = nanoid();
    try {
      event.preventDefault();

      if (!isAuthenticated) {
        return navigate('/login');
      }

      const currentDatetime = new Date().toISOString();
      const appendCommentPayload = {
        id: commentId,
        owner: user,
        content: comment,
        createdAt: currentDatetime,
      };

      const createCommentPayload = {
        data: {
          content: comment,
        },
        threadId: thread.id!,
        authToken: token,
      };

      dispatch(appendComment(appendCommentPayload));
      await dispatch(createCommentAsync(createCommentPayload));
      setComment("");
    } catch (error) {
      dispatch(removeComment(commentId));
      toast({
        title: 'Failed',
        description: 'Failed to create comment',
        variant: 'destructive',
      });
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
