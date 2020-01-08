import { fetchData } from './APIUtils';

const URL = 'http://localhost:3004/users/';

export const fetchUserById = async (id, callback) => {
  const url = URL + id;
  const user = await fetchData(url);
  callback(user);
};
