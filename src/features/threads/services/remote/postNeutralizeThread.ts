import client from '@/core/api/client';

export interface PostDownVoteThreadArguments {
  threadId: string;
  authToken: string;
}

const postNeutralizeThread = async ({
  threadId,
  authToken,
}: PostDownVoteThreadArguments) => {
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
