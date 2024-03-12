import { AxiosError, AxiosResponse, isAxiosError } from 'axios';
import { PostDownVoteThreadArguments, postDownVoteThread } from '../services';

const downVoteThread = async ({
  threadId,
  authToken,
}: PostDownVoteThreadArguments) => {
  try {
    const response = await postDownVoteThread({ threadId, authToken });
    return handleSuccess(response);
  } catch (error) {
    handleError(error);
  }
};

const handleSuccess = (response: AxiosResponse) => {
  return response.data.data;
};

const handleError = (error) => {
  if (isAxiosError(error)) {
    handleAxiosError(error);
  }
  throw Error('failed to down vote');
};

const handleAxiosError = (error: AxiosError) => {
  if (error.response) {
    throw Error(error.response.data.message);
  }
};

export default downVoteThread;
