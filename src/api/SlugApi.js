import { fetchBody } from './APIUtils';

const SlugApi = () => {
  const URL = process.env.REACT_APP_ROOT_URL;

  const fetchSlugList = () => fetchBody(`${URL}/slugs`);

  return {
    fetchSlugList,
  };
};

export default SlugApi();
