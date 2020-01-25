import React from 'react';
import CategoryBanner from '../CategoryBanner/CategoryBanner';

const CategoryList = ({ categoryList }) => {
  const list = categoryList.map(({ category, category_avatar, panels }) => {
    return (
      <CategoryBanner
        name={category.name}
        imageUrl={category_avatar}
        panels={panels}
        color={'#00ccff'}
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
