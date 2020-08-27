import React, { useState, useEffect } from "react";

import { useStoreContext } from "../../contexts/StoreContext/StoreContext";
import Loader from "../../components/Loader/Loader";
import HomePage from "../../views/HomePage/HomePage";
import RegionApi from "../../api/RegionApi";

const HomePageWrapper = () => {
  const { setCategoryList } = useStoreContext();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadCategoryList = async () => {
      const { categories } = await RegionApi.loadRegion(2);
      setCategoryList(categories);
      setLoaded(true);
    };
    loadCategoryList();
  }, []);

  if (loaded) {
    return (
      <HomePage />
    );
  }
  return (
    <Loader />
  );
};

export default HomePageWrapper;
