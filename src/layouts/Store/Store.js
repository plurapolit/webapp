import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import UserApi from "../../api/UserApi";
import StoreContext from "./StoreContext";
import StoreHelper from "./StoreHelper";

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
    email = "foo@bar.de",
    password = "secret",
    firstName = "Foo",
    lastName = "Bar",
  ) => {
    const newUser = await UserApi.signUp(email, password, firstName, lastName);
    setUser(newUser);
  };

  const removeUser = () => {
    setUser(undefined);
  };

  return (
    <StoreContext.Provider
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
    </StoreContext.Provider>
  );
};

Store.propTypes = {
  children: PropTypes.node,
};

Store.defaultProps = {
  children: null,
};

export default Store;
