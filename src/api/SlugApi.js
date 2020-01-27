import { fetchData } from './APIUtils';

const SlugApi = () => {
  const URL = process.env.REACT_APP_ROOT_URL;

  const fetchSlugList = () => {
    return fetchData(`${URL}/slugs`);
  };

  return {
    fetchSlugList,
  };
};

export default SlugApi();
