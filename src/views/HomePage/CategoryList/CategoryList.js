import React from "react";

import CategoryBanner from "../CategoryBanner/CategoryBanner";
import { useStoreContext } from "../../../contexts/StoreContext/StoreContext";

/* eslint-disable camelcase */
const CategoryList = () => {
  const { categoryList } = useStoreContext();
  const list = categoryList.map(({ category, panels }) => (
    <CategoryBanner
      key={category.id}
      name={category.name}
      panels={panels}
      color={category.background_color}
    />
  ));

  return <>{list}</>;
};
/* eslint-enable camelcase */

export default CategoryList;
