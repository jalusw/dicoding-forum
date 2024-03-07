import client from '@/core/api/client';

const fetchThreads = async () => {
  return await client.get('threads');
};
export default fetchThreads;
