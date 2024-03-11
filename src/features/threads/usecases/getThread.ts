import { AxiosError, AxiosResponse, HttpStatusCode, isAxiosError } from 'axios';
import fetchThread from '../services/remote/fetchThread';

const getThread = async (id: string) => {
  try {
    const response = await fetchThread(id);
    return handleSuccess(response);
  } catch (error) {
    handleError(error);
  }
};

const handleSuccess = (response: AxiosResponse) => {
  if (response.status !== HttpStatusCode.Ok) {
    throw Error('Failed to fetch thread');
  }
  return response.data.data.detailThread;
};

const handleError = (error) => {
  if (isAxiosError(error)) {
    handleAxiosError(error);
  }
  throw error;
};

const handleAxiosError = (error: AxiosError) => {
  if (error.response?.status == HttpStatusCode.NotFound) {
    throw Error('thread is not exist');
  }
};

export default getThread;
