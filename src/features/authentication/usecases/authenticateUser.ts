import { AxiosError, AxiosResponse, HttpStatusCode, isAxiosError } from 'axios';
import { postLogin } from '../services';

const authenticateUser = async (credentials) => {
  try {
    const response = await postLogin(credentials);
    return handleSuccess(response);
  } catch (error) {
    handleError(error);
  }
};

const handleSuccess = (response: AxiosResponse) => {
  if (response.status !== HttpStatusCode.Ok) {
    throw Error('Failed to authenticate');
  }
  return response.data;
};

const handleError = (error) => {
  if (isAxiosError(error)) {
    handleAxiosError(error);
  }
  throw Error('Failed to authenticate');
};

const handleAxiosError = (error: AxiosError) => {
  if (error.response) {
    throw Error(error.response.data.message);
  }
};

export default authenticateUser;
