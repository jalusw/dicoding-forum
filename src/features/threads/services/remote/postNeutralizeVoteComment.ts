import client from '@/core/api/client';

export interface PostNeutralizeVoteCommentArguments {
  threadId: string;
  commentId: string;
  authToken: string;
}

const postNeutralizeVoteComment = async ({
  threadId,
  commentId,
  authToken,
}: PostNeutralizeVoteCommentArguments) => {
  return await client.post(
    `/threads/${threadId}/comments/${commentId}/neutral-vote`,
    {},
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    },
  );
};

export default postNeutralizeVoteComment;
