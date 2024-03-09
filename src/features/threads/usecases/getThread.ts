import { HttpStatusCode } from 'axios';
import fetchThread from '../services/remote/fetchThread';

const getThread = async (id) => {
  try {
    const response = await fetchThread(id);
    if (response.status != HttpStatusCode.Ok) {
      throw Error('Failed to fetch thread');
    }
    return response.data.data.detailThread;
  } catch (error) {
    throw error;
  }
};

export default getThread;
