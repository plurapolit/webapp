import React, { useContext } from "react";

import CategoryBanner from "../CategoryBanner/CategoryBanner";
import { StoreContext } from "../../../contexts/StoreContext/StoreContext";

/* eslint-disable camelcase */
const CategoryList = () => {
  const { categoryList } = useContext(StoreContext);
  const list = categoryList.map(({ category, category_avatar, panels }) => (
    <CategoryBanner
      key={category.id}
      name={category.name}
      imageUrl={category_avatar}
      panels={panels}
      color={category.background_color}
    />
  ));

  return <>{list}</>;
};
/* eslint-enable camelcase */

export default CategoryList;
