import React, { useState, useEffect, useContext } from "react";

import SlugApi from "../../api/SlugApi";

const StoreContext = React.createContext();
const { Provider } = StoreContext;

const Store = ({ children }) => {
  const [categoryList, setCategoryList] = useState(undefined);
  const [slugList, setSlugList] = useState(undefined);

  useEffect(() => {
    const loadSlugList = async () => {
      const loadedSlugList = await SlugApi.fetchSlugList();
      setSlugList(loadedSlugList);
    };
    loadSlugList();
  }, []);

  const getPanelIdBySlug = (slug) => {
    const slugObj = slugList.find(({ panel }) => panel.slug === slug);
    if (slugObj) return slugObj.panel.id;
    return false;
  };

  return (
    <Provider
      value={{
        categoryList,
        setCategoryList,
        slugList,
        getPanelIdBySlug,
      }}
    >
      {children}
    </Provider>
  );
};

const useStoreContext = () => useContext(StoreContext);

export { Store, Provider as StoreProvider, useStoreContext };
