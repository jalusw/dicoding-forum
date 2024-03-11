import { AxiosResponse, HttpStatusCode } from 'axios';
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
  throw error;
};

export default getThread;
