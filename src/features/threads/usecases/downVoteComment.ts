import { AxiosError, AxiosResponse, isAxiosError } from 'axios';
import { PostDownVoteCommentArguments, postDownVoteComment } from '../services';

const downVoteComment = async (data: PostDownVoteCommentArguments) => {
  try {
    const response = await postDownVoteComment(data);
    return handleSuccess(response);
  } catch (error) {
    handleError(error);
  }
};

const handleSuccess = (response: AxiosResponse) => {
  return response.data.data;
};

const handleError = (error: unknown) => {
  if (isAxiosError(error)) {
    handleAxiosError(error);
  }
  throw Error('failed to up vote comment');
};

const handleAxiosError = (error: AxiosError) => {
  if (error.response) {
    throw Error(error.response.data.message);
  }
};

export default downVoteComment;
