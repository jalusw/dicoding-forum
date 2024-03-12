import client from '@/core/api/client';

export interface PostDownVoteThreadArguments {
  threadId: string;
  authToken: string;
}

const postDownVoteThread = async ({
  threadId,
  authToken,
}: PostDownVoteThreadArguments) => {
  return await client.post(
    `threads/${threadId}/down-vote`,
    {},
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    },
  );
};

export default postDownVoteThread;
