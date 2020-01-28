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

  async function validate() {
    const URL = process.env.REACT_APP_ROOT_URL;
    const parameters = Parameter.get(this.jwt);
    const res = await fetch(`${URL}/authenticate`, parameters);
    if (res.ok) {
      return true;
    }
    if (res.status === 401) {
      return false;
    }
    const errorObj = await res.json();
    throw errorObj;
  }

  function get() {
    if (!this.jwt) {
      this.jwt = getJwtFromCookie();
    }
    return this.jwt;
  }

  function set(token) {
    Cookie.set('jwt', token);
    this.jwt = token;
  }

  async function deleteJwt() {
    UserApi.signOut(this.jwt)
      .then(() => {
        this.set(null);
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
