import { FC } from 'react';
import {
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/common/components/ui/dialog';
import { Input } from '@/common/components/ui/input';
import { Button } from '@/common/components/ui/button';
import { Editor } from '@/common/components';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/common/components/ui/form';
import { useAppDispatch, useAuth } from '@/common/hooks';
import { createThreadAsync } from '../../slices/threadSlice';
import { toast } from '@/common/components/ui/use-toast';
import { nanoid } from '@reduxjs/toolkit';
import { appendThread, removeThread } from '../../slices/threadsSlice';

const formSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  category: z.string(),
  body: z.string(),
});

const ThreadCreateForm: FC = () => {
  const dispatch = useAppDispatch();
  const { token, user } = useAuth();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      category: '',
      body: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const id = nanoid();
    try {
      const currentDatetime = new Date().toISOString();

      dispatch(
        appendThread({
          id,
          ownerId: user!.id,
          upVotesBy: [],
          downVotesBy: [],
          createdAt: currentDatetime,
          ...values,
          category: values.category === '' ? 'general' : values.category
        }),
      );
      await dispatch(
        createThreadAsync({
          thread: values,
          authToken: token,
        }),
      );
      toast({
        title: 'Success',
        description: 'Thread created successfully',
      });
    } catch (error) {
      dispatch(removeThread(id));
      toast({
        title: 'Failed',
        description: 'Failed to create thread',
        variant: 'destructive',
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <DialogHeader>
          <DialogTitle>New Thread</DialogTitle>
        </DialogHeader>
        <div className="mt-4 flex flex-col space-y-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Category" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <Editor
              onChange={(event) =>
                form.setValue('body', event.target.innerHTML)
              }
              value="Write something..."
            />
          </div>
        </div>
        <DialogFooter className="mt-4 sm:justify-start">
          <DialogClose asChild>
            <Button type="submit">Post It !</Button>
          </DialogClose>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default ThreadCreateForm;
