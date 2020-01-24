import { fetchData, Parameter } from './APIUtils';

const UserApi = () => {
  const URL = process.env.REACT_APP_ROOT_URL;

  const signIn = (email, password, rememberMe) => {
    const body = {
      user: {
        email,
        password,
        remember_me: rememberMe,
      },
    };

    const parameters = Parameter.post(body);
    return fetchData(`${URL}/users/sign_in`, parameters);
  };

  const signUp = (email, password, firstName, lastName) => {
    const body = {
      user: {
        email,
        password,
        first_name: firstName,
        last_name: lastName,
      },
    };
    const parameters = Parameter.post(body);
    return fetchData(`${URL}/users`, parameters);
  };

  return {
    signIn,
    signUp,
  };
};

export default UserApi();
