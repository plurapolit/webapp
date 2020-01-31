import { fetchResponse, Parameter } from './APIUtils';
import JwtApi from './JwtApi';

const LikeApi = () => {
  const getUrl = (statementId) => `${process.env.REACT_APP_ROOT_URL}/statements/${statementId}/likes`;

  const post = async (statementId) => {
    const parameters = Parameter.post(null, JwtApi.get());
    const res = await fetchResponse(getUrl(statementId), parameters);
    if (res.ok) {
      return true;
    }
    return false;
  };

  const deleteLike = async (statementId) => {
    const parameters = Parameter.delete(JwtApi.get());
    const res = await fetchResponse(getUrl(statementId), parameters);
    if (res.ok) {
      return true;
    }
    return false;
  };

  return {
    post,
    delete: deleteLike,
  };
};

export default LikeApi();
