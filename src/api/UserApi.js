import { fetchData, bearerToken, Parameter } from './APIUtils';

const URL = 'http://localhost:3000/api/users';

// export const fetchUserById = (id) => {
//   const url = URL + id;
//   const jwt = 'hello there';
//   const parameters = {
//     method: HttpMethods.GET,
//     headers: {
//       'Authorization': bearerToken(jwt),
//     },
//   };
//   return fetchData(url, parameters);
// };

export const signIn = (user) => {
  const url = `${URL}/sign_in`;
  const parameters = Parameter.post({ user });
  return fetchData(url, parameters);
};
