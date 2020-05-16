import React, { useState, useEffect, useContext } from "react";

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

  const getPanelIdBySlug = (slug) => {
    const slugObj = slugList.find(({ panel }) => panel.slug === slug);
    if (slugObj) return slugObj.panel.id;
    return false;
  };

  const getUserId = () => {
    if (user) return user.id;
    return undefined;
  };

  return (
    <Provider
      value={{
        user,
        getUserId,
        categoryList,
        slugList,
        getPanelIdBySlug,
        setUser,
        signUp,
        removeUser,
      }}
    >
      {children}
    </Provider>
  );
};

const useStoreContext = () => useContext(StoreContext);

export { Store, Provider as StoreProvider, useStoreContext };
