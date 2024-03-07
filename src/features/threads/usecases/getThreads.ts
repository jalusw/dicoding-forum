import { HttpStatusCode } from 'axios';
import { fetchThreads } from '../services';

const getThreads = async () => {
  try {
    const response = await fetchThreads();
    if (response.status != HttpStatusCode.Ok) {
      throw Error('Failed to fetch data');
    }
    return response.data.data.threads;
  } catch (error) {
    throw error;
  }
};

export default getThreads;
