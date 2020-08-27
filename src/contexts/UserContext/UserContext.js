import React, { useState, useContext, useEffect } from "react";

import JwtApi from "../../api/JwtApi";
import UserApi from "../../api/UserApi";

const UserContext = React.createContext();
const { Provider } = UserContext;

const User = ({
  children,
}) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const loadUser = async () => {
      const loadedUser = await JwtApi.validate();
      setUser(loadedUser);
    };
    loadUser();
  }, []);

  const getUserId = () => {
    if (user) return user.id;
    return undefined;
  };

  const removeUser = () => {
    setUser(undefined);
  };

  const signUp = async (
    email,
    password,
    firstName,
    lastName,
  ) => {
    const newUser = await UserApi.signUp(email, password, firstName, lastName);
    setUser(newUser);
  };

  return (
    <Provider
      value={{
        user,
        getUserId,
        setUser,
        signUp,
        removeUser,
      }}
    >
      {children}
    </Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { User, Provider as UserProvider, useUserContext };
