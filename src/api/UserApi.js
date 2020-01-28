import { fetchData, Parameter } from './APIUtils';

const UserApi = () => {
  const URL = process.env.REACT_APP_ROOT_URL;

  // TODO: Load user just with valid jwt

  const signIn = (email, password) => {
    const body = {
      user: {
        email,
        password,
      },
    };

    const parameters = Parameter.post(body);
    return fetchData(`${URL}/users/sign_in`, parameters);
  };

  const signUp = (email, password, firstName, lastName, ageRange) => {
    const body = {
      user: {
        email,
        password,
        first_name: firstName,
        last_name: lastName,
        age_range_id: ageRange,
      },
    };
    const parameters = Parameter.post(body);
    return fetchData(`${URL}/users`, parameters);
  };

  const signOut = async (jwt) => {
    const parameters = Parameter.delete(jwt);
    const res = await fetch(`${URL}/users/sign_out`, parameters);
    if (!res.ok) {
      const errorOkj = await res.json();
      throw errorOkj;
    }
    return true;
  };

  return {
    signIn,
    signUp,
    signOut,
  };
};

export default UserApi();
