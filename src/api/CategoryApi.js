import { fetchData } from './APIUtils';

const CategoryApi = () => {
  const URL = process.env.REACT_APP_PANEL_URL;

  const fetchAllCategories = async () => {
    const categories = fetchData(URL);
    return categories;
  };

  return {
    fetchAllCategories,
  };
};

export default CategoryApi();
