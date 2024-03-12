import client from '@/core/api/client';

const fetchUsers = async () => {
  return await client.get('users');
};

export default fetchUsers;
