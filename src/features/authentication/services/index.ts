import postRegisterUser from './remote/postRegisterUser';
import postLogin from './remote/postLogin';
import fetchAuthenticatedUser from './remote/fetchAuthenticatedUser';
import fetchUsers from './remote/fetchUsers';
import type { RegisterDataPayload } from './remote/postRegisterUser';
import type { LoginDataPayload } from './remote/postLogin';

export type { RegisterDataPayload, LoginDataPayload };
export { postRegisterUser, postLogin, fetchAuthenticatedUser, fetchUsers };
