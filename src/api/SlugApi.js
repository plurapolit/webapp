import { fetchBody } from './APIUtils';

const SlugApi = () => {
  const URL = process.env.REACT_APP_ROOT_URL;

  const fetchSlugList = () => {
    return fetchBody(`${URL}/slugs`);
  };

  return {
    fetchSlugList,
  };
};

export default SlugApi();
