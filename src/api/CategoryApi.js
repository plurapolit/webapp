import { fetchBody } from './APIUtils';

const CategoryApi = () => {
  const URL = process.env.REACT_APP_ROOT_URL;

  const fetchAllCategories = () => {
    const categories = fetchBody(`${URL}/panels`);
    return categories;
  };

  return {
    fetchAllCategories,
  };
};

export default CategoryApi();
