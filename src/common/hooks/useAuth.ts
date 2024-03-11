import { useAppSelector } from '.';

const useAuth = () => {
  const authenticationState = useAppSelector((state) => state.authentication);
  const { token, user } = authenticationState;

  const isAuthenticated = token.trim().length > 0 && user !== null;

  return { isAuthenticated, token, user };
};

export default useAuth;
