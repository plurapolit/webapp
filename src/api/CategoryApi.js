import { fetchData, bearerToken, Parameter } from './APIUtils';

const URL = process.env.REACT_APP_CATEGORY_URL;

export const fetchAllCategories = async (jwt) => {
  const token = bearerToken(jwt);
  const parameters = Parameter.get(token);
  const categories = fetchData(URL, parameters);
  return categories;
};
