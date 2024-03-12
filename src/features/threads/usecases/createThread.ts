import { AxiosResponse, HttpStatusCode } from 'axios';
import { postThread, PostThreadArguments } from '../services';

const createThread = async (data: PostThreadArguments) => {
  try {
    const response = await postThread(data);
    return handleSuccess(response);
  } catch (error) {
    handleError(error);
  }
};

const handleSuccess = (response: AxiosResponse) => {
  if (response.status !== HttpStatusCode.Created) {
    throw Error('Failed to post thread ');
  }
  return response.data;
};

const handleError = (error: unknown) => {
  throw error;
};

export default createThread;
