import { AxiosResponse, HttpStatusCode } from 'axios';
import { fetchThreads } from '../services';

const getThreads = async () => {
  try {
    const response = await fetchThreads();
    handleSuccess(response);
  } catch (error) {
    handleError(error);
  }
};

const handleSuccess = (response: AxiosResponse) => {
  if (response.status !== HttpStatusCode.Ok) {
    throw Error('Failed to fetch data');
  }
  return response.data.data.threads;
};

const handleError = (error) => {
  throw error;
};

export default getThreads;
