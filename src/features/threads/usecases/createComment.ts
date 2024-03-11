import { AxiosResponse, HttpStatusCode } from 'axios';
import { PostCommentArguments, postComment } from '../services';

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

const handleError = (error: unknown) => {
  throw error;
};

export default createComment;
