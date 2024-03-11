import { AxiosError, AxiosResponse, HttpStatusCode, isAxiosError } from 'axios';
import { postRegisterUser } from '../services';

const registerUser = async (userData) => {
  try {
    const response = await postRegisterUser(userData);
    return handleSuccess(response);
  } catch (error) {
    handleError(error);
  }
};

const handleSuccess = (response: AxiosResponse) => {
  if (response.status !== HttpStatusCode.Created) {
    throw Error('Failed to create user');
  }
  return response.data.data;
};

const handleError = (error) => {
  if (isAxiosError(error)) {
    handleAxiosError(error);
  }
  throw Error('Failed to create user');
};

const handleAxiosError = (error: AxiosError) => {
  if (error.response) {
    throw Error(error.response.data.message);
  }
};

export default registerUser;
