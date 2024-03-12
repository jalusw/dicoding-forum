import client from '@/core/api/client';

interface PostCommentPayload {
  content: string;
}

export interface PostCommentArguments {
  data: PostCommentPayload;
  threadId: string;
  authToken: string;
}

const postComment = async ({
  data,
  threadId,
  authToken,
}: PostCommentArguments) => {
  return await client.post(`/threads/${threadId}/comments`, data, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
};

export default postComment;
