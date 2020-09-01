import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";

import SlugApi from "../../api/SlugApi";
import RegionApi from "../../api/RegionApi";

const StoreContext = React.createContext();
const { Provider } = StoreContext;

const Store = ({ children }) => {
  // TODO: category should be in a separate context lower in tree to prevent rendering;
  const [categoryList, setCategoryList] = useState();
  const [regions, setRegions] = useState();
  const [slugList, setSlugList] = useState();
  const [regionsAndCategories, setRegionsAndCategories] = useState();

  useEffect(() => {
    const loadRegions = async () => {
      const { regions: loadedRegions } = await RegionApi.loadAllRegions();
      setRegions(loadedRegions);
    };
    const loadSlugList = async () => {
      const { panels } = await SlugApi.fetchSlugList();
      setSlugList(panels);
    };
    loadRegions();
    loadSlugList();
  }, []);

  const getArrayFromRegion = useCallback((action) => {
    if (!regions) return [];
    const arrayOfRegionAttribute = regions.map(action);
    return arrayOfRegionAttribute;
  }, [regions]);

  useEffect(() => {
    if (regions) {
      const loadRegionsAndCategories = async () => {
        const arrayOfRegionIds = getArrayFromRegion(({ region }) => region.id);
        const arrayOfPromises = arrayOfRegionIds.map((id) => RegionApi.loadRegion(id));
        const loadedRegionsAndCategories = await Promise.all(arrayOfPromises);
        setRegionsAndCategories(loadedRegionsAndCategories);
      };
      loadRegionsAndCategories();
    }
  }, [regions, getArrayFromRegion]);


  const getPanelIdBySlug = (slug) => {
    const slugObj = slugList.find(({ panel }) => panel.slug === slug);
    if (slugObj) return slugObj.panel.id;
    return false;
  };

  const getRegionNames = () => getArrayFromRegion(({ region }) => region.name);

  const getRegionRoutes = () => {
    if (!regions) return [];
    const arrayOfRegionRoutes = regions.map(({ region }) => region);
    return arrayOfRegionRoutes;
  };

  const getCategoriesByRegionId = (id) => {
    if (!regions) return [];
    const foundRegion = regionsAndCategories.find((region) => region.id === id);
    return foundRegion.categories;
  };

  return (
    <Provider
      value={{
        categoryList,
        regionsAndCategories,
        setCategoryList,
        slugList,
        getPanelIdBySlug,
        getRegionNames,
        getRegionRoutes,
        getCategoriesByRegionId,
      }}
    >
      {children}
    </Provider>
  );
};

const useStoreContext = () => useContext(StoreContext);

export { Store, Provider as StoreProvider, useStoreContext };
