import { AxiosResponse, HttpStatusCode } from 'axios';
import { postComment } from '../services';

import { PostCommentArguments } from '../services/remote/postComment';

const createComment = async (data: PostCommentArguments) => {
  try {
    const response = await postComment(data);
    return handleSuccess(response);
  } catch (error) {
    handleError(error);
  }
};

const handleSuccess = (response: AxiosResponse) => {
  if (response.status !== HttpStatusCode.Created) {
    throw Error('Failed to post comment ');
  }
  return response.data;
};

const handleError = (error) => {
  throw error;
};

export default createComment;
