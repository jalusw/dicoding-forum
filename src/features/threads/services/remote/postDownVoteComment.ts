import client from '@/core/api/client';

export interface PostDownVoteCommentArguments {
  threadId: string;
  commentId: string;
  authToken: string;
}

const postDownVoteComment = async ({
  threadId,
  commentId,
  authToken,
}: PostDownVoteCommentArguments) => {
  return await client.post(
    `/threads/${threadId}/comments/${commentId}/down-vote`,
    {},
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    },
  );
};

export default postDownVoteComment;
