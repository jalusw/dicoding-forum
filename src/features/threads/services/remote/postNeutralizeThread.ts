import client from '@/core/api/client';

export interface PostNeutralizeThread {
  threadId: string;
  authToken: string;
}

const postNeutralizeThread = async ({
  threadId,
  authToken,
}: PostNeutralizeThread) => {
  return await client.post(
    `threads/${threadId}/neutral-vote`,
    {},
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    },
  );
};

export default postNeutralizeThread;
