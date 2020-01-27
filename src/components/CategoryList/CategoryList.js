import React from 'react';
import CategoryBanner from '../CategoryBanner/CategoryBanner';

const CategoryList = ({ categoryList }) => {
  const list = categoryList.map(({ category, category_avatar, panels }) => {
    return (
      <CategoryBanner
        key={category.id}
        name={category.name}
        imageUrl={category_avatar}
        panels={panels}
        color={category.background_color}
      />
    );
  });

  return (
    <>
      {list}
    </>
  );
};

export default CategoryList;
