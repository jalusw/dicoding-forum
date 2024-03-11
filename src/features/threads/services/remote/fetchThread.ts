import client from '@/core/api/client';

const fetchThread = async (id: string) => {
  return await client.get(`threads/${id}`);
};

export default fetchThread;
