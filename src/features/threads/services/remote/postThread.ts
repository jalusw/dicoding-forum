import client from '@/core/api/client';

export interface PostThreadPayload {
  title: string;
  body: string;
  category?: string;
}

export interface PostThreadArguments {
  thread: PostThreadPayload;
  authToken: string;
}

const postThread = async ({ thread, authToken }: PostThreadArguments) => {
  return await client.post('threads', thread, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
};

export default postThread;
