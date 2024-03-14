import client from '@/core/api/client';

export interface PostUpVoteCommentArguments {
  threadId: string;
  commentId: string;
  authToken: string;
}

const postUpVoteComment = async ({
  threadId,
  commentId,
  authToken,
}: PostUpVoteCommentArguments) => {
  return await client.post(
    `/threads/${threadId}/comments/${commentId}/up-vote`,
    {},
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    },
  );
};

export default postUpVoteComment;
