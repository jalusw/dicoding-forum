import { AxiosError, AxiosResponse, isAxiosError } from 'axios';
import { PostNeutralizeThread, postNeutralizeThread } from '../services';

const neutralizeVoteThread = async ({
  threadId,
  authToken,
}: PostNeutralizeThread) => {
  try {
    const response = await postNeutralizeThread({ threadId, authToken });
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
  throw Error('failed to neutralize vote');
};

const handleAxiosError = (error: AxiosError) => {
  if (error.response) {
    throw Error(error.response.data.message);
  }
};

export default neutralizeVoteThread;
