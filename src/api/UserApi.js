import { fetchData } from './APIUtils';

const URL = 'http://localhost:3004/users/';

export const fetchUserById = (id) => {
  const url = URL + id;
  const user = fetchData(url);
  return user;
};
