import { AxiosError, AxiosResponse, isAxiosError } from 'axios';
import { PostUpVoteThreadArguments, postUpVoteThread } from '../services';

const upVoteThread = async ({
  threadId,
  authToken,
}: PostUpVoteThreadArguments) => {
  try {
    const response = await postUpVoteThread({ threadId, authToken });
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
  throw Error('failed to down vote');
};

const handleAxiosError = (error: AxiosError) => {
  if (error.response) {
    throw Error(error.response.data.message);
  }
};

export default upVoteThread;
