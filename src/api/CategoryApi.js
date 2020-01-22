import { fetchData, bearerToken, Parameter } from './APIUtils';

const URL = 'http://localhost:3000/api/categories';

export const fetchAllCategories = async (jwt) => {
  const token = bearerToken(jwt);
  const parameters = Parameter.get(token);
  const categories = fetchData(URL, parameters);
  return categories;
};
