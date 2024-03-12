import { AxiosError, AxiosResponse, HttpStatusCode, isAxiosError } from 'axios';
import fetchAuthenticatedUser from '../services/remote/fetchAuthenticatedUser';

const getAuthenticatedUser = async (token: string) => {
  try {
    const response = await fetchAuthenticatedUser(token);
    return handleSuccess(response);
  } catch (error) {
    handleError(error);
  }
};

const handleSuccess = (response: AxiosResponse) => {
  if (response.status !== HttpStatusCode.Ok) {
    throw Error('Failed to get authenticated user data');
  }
  return response.data.data;
};

const handleError = (error: unknown) => {
  if (isAxiosError(error)) {
    handleAxiosError(error);
  }
  throw Error('Failed to get authenticated user data');
};

const handleAxiosError = (error: AxiosError) => {
  if (error.response) {
    throw Error(error.response.data.message);
  }
};

export default getAuthenticatedUser;
