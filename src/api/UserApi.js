import { fetchData, Parameter } from './APIUtils';

const UserApi = () => {
  const URL = process.env.REACT_APP_ROOT_URL;

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

  return {
    signIn,
    signUp,
  };
};

export default UserApi();
