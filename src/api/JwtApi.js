import Cookie from 'js-cookie';

import UserApi from './UserApi';
import { Parameter } from './APIUtils';

const JwtApi = () => {
  let jwt;

  const getJwtFromCookie = () => {
    const token = Cookie.get('jwt');
    if (token) {
      return token;
    }
    return null;
  };

  function get() {
    if (!jwt) {
      jwt = getJwtFromCookie();
    }
    return jwt;
  }

  async function validate() {
    const URL = process.env.REACT_APP_ROOT_URL;
    get();
    const parameters = Parameter.get(jwt);
    const res = await fetch(`${URL}/authenticate`, parameters);
    if (res.ok) {
      const response = await res.json();
      return response;
    }
    if (res.status === 401) {
      return false;
    }
    const errorObj = await res.json();
    throw errorObj;
  }

  function set(token) {
    Cookie.set('jwt', token);
    jwt = token;
  }

  async function deleteJwt() {
    UserApi.signOut(jwt)
      .then(() => {
        set(null);
      });
  }

  return {
    get,
    set,
    delete: deleteJwt,
    validate,
  };
};

export default JwtApi();
