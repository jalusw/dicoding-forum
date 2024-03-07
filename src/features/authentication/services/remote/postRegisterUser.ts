import client from '@/core/api/client';

export interface RegisterDataPayload {
  name: string;
  email: string;
  password: string;
}

const postRegisterUser = async (payload: RegisterDataPayload) => {
  return client.post('register', payload);
};

export default postRegisterUser;
