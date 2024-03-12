import { AxiosError, AxiosResponse, HttpStatusCode, isAxiosError } from 'axios';
import { fetchUsers } from '../services';
import { User } from '../entities';

const getUsers = async () => {
  try {
    const response = await fetchUsers();
    return handleSuccess(response);
  } catch (error) {
    handleError(error);
  }
};

const handleSuccess = (response: AxiosResponse) => {
  if (response.status !== HttpStatusCode.Ok) {
    throw Error('Failed to get  users data');
  }
  const usersMap = {};
  response.data.data.users.forEach((user: User) => (usersMap[user.id] = user));
  return usersMap;
};

const handleError = (error: unknown) => {
  if (isAxiosError(error)) {
    handleAxiosError(error);
  }
  throw Error('Failed to get  users data');
};

const handleAxiosError = (error: AxiosError) => {
  if (error.response) {
    throw Error(error.response.data.message);
  }
};

export default getUsers;
