import React, { useState, useEffect, useContext } from "react";

import SlugApi from "../../api/SlugApi";
import RegionApi from "../../api/RegionApi";

const StoreContext = React.createContext();
const { Provider } = StoreContext;

const Store = ({ children }) => {
  // TODO: category should be in a separate context lower in tree to prevent rendering;
  const [categoryList, setCategoryList] = useState();
  const [regions, setRegions] = useState();
  const [slugList, setSlugList] = useState();

  useEffect(() => {
    const loadContent = async () => {
      const slugListPromise = SlugApi.fetchSlugList();
      const regionPromise = RegionApi.loadAllRegions();
      const [loadedSlugList, loadedRegions] = await Promise.all([slugListPromise, regionPromise]);
      setSlugList(loadedSlugList);
      setRegions(loadedRegions.regions);
    };
    loadContent();
  }, []);

  const getPanelIdBySlug = (slug) => {
    const slugObj = slugList.find(({ panel }) => panel.slug === slug);
    if (slugObj) return slugObj.panel.id;
    return false;
  };

  const getRegionNames = () => {
    if (!regions) return [];
    const arrayOfRegionNames = regions.map(({ region }) => region.name);
    return arrayOfRegionNames;
  };

  return (
    <Provider
      value={{
        categoryList,
        setCategoryList,
        slugList,
        getPanelIdBySlug,
        getRegionNames,
      }}
    >
      {children}
    </Provider>
  );
};

const useStoreContext = () => useContext(StoreContext);

export { Store, Provider as StoreProvider, useStoreContext };
