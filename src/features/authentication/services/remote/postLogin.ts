import client from '@/core/api/client';

export interface LoginDataPayload {
  email: string;
  password: string;
}

const postLogin = async (data: LoginDataPayload) => {
  return await client.post('login', data);
};

export default postLogin;
