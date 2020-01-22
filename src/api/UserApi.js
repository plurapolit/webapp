import { fetchData, Parameter } from './APIUtils';

export const signIn = (user) => {
  const url = process.env.REACT_APP_SIGN_IN_URL;
  const parameters = Parameter.post({ user });
  return fetchData(url, parameters);
};
