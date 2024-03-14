import { AxiosError, AxiosResponse, HttpStatusCode, isAxiosError } from 'axios';
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
  if(isAxiosError(error)){
    handleAxiosError(error);
  }
  throw Error("Failed to post thread");
};

const handleAxiosError = (error : AxiosError) => {
  if(error.response){
    throw Error(error.response.data.message);
  }
  throw Error("Failed to post thread");
}

export default createThread;
