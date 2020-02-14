import { fetchBody, Parameter } from "./APIUtils";

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
    return fetchBody(`${URL}/users/sign_in`, parameters);
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
    return fetchBody(`${URL}/users`, parameters);
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

  const resetPassword = async (password, passwordConfirmation, resetPasswordToken) => {
    const body = {
      user: {
        password,
        password_confirmation: passwordConfirmation,
        reset_password_token: resetPasswordToken,
      },
    };
    const parameters = Parameter.put(body);
    return fetch(`${URL}/users/password`, parameters);
  };

  const requestNewPassword = async (email) => {
    const body = {
      user: {
        email,
      },
    };
    const parameters = Parameter.post(body);
    return fetch(`${URL}/users/password`, parameters);
  };

  return {
    signIn,
    signUp,
    signOut,
    resetPassword,
    requestNewPassword,
  };
};

export default UserApi();
