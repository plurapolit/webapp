import React from "react";
import CategoryBanner from "../CategoryBanner/CategoryBanner";

/* eslint-disable camelcase */
const CategoryList = ({ categoryList }) => {
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
