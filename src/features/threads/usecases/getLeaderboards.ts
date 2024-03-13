import { AxiosError, AxiosResponse, HttpStatusCode, isAxiosError } from 'axios';
import { fetchLeaderboards } from '../services';

const getLeaderboards = async () => {
  try {
    const response = await fetchLeaderboards();
    return handleSuccess(response);
  } catch (error) {
    handleError(error);
  }
};

const handleSuccess = (response: AxiosResponse) => {
  if (response.status !== HttpStatusCode.Ok) {
    throw Error('Failed to fetch leaderboards');
  }
  return response.data.data;
};

const handleError = (error) => {
  if (isAxiosError(error)) {
    handleAxiosError(error);
  }
  throw error;
};

const handleAxiosError = (error: AxiosError) => {
  if(error.response){
    throw Error(error.response.data.message);
  }
};

export default getLeaderboards;
