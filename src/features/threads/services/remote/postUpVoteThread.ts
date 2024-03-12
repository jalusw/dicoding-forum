import client from '@/core/api/client';

export interface PostUpVoteThreadArguments {
  threadId: string;
  authToken: string;
}

const postUpVoteThread = async ({
  threadId,
  authToken,
}: PostUpVoteThreadArguments) => {
  return await client.post(
    `threads/${threadId}/up-vote`,
    {},
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    },
  );
};

export default postUpVoteThread;
