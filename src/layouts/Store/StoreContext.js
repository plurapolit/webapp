import React, { useState, useEffect } from "react";

import UserApi from "../../api/UserApi";
import StoreHelper from "./StoreHelper";

const StoreContext = React.createContext();
const { Provider } = StoreContext;

const Store = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [categoryList, setCategoryList] = useState(undefined);
  const [slugList, setSlugList] = useState(undefined);

  useEffect(() => {
    StoreHelper.loadContent((newCategoryList, newSlugList, recognisedUser) => {
      setCategoryList(newCategoryList);
      setSlugList(newSlugList);
      setUser(recognisedUser);
    });
  }, []);

  const signUp = async (
    email,
    password,
    firstName,
    lastName,
  ) => {
    const newUser = await UserApi.signUp(email, password, firstName, lastName);
    setUser(newUser);
  };

  const removeUser = () => {
    setUser(undefined);
  };

  return (
    <Provider
      value={{
        user,
        categoryList,
        slugList,
        setUser,
        signUp,
        removeUser,
      }}
    >
      {children}
    </Provider>
  );
};

export { Store, StoreContext };
