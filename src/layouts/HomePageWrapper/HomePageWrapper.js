import React, { useState, useEffect } from "react";

import { useStoreContext } from "../../contexts/StoreContext/StoreContext";
import Loader from "../../components/Loader/Loader";
import RegionApi from "../../api/RegionApi";

const HomePageWrapper = ({
  id,
  children,
}) => {
  const { setCategoryList } = useStoreContext();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadCategoryList = async () => {
      const { categories } = await RegionApi.loadRegion(id);
      setCategoryList(categories);
      setLoaded(true);
    };
    loadCategoryList();
  }, [id, setCategoryList]);

  if (loaded) {
    return children;
  }
  return (
    <Loader />
  );
};

export default HomePageWrapper;
