import React from 'react';
import CategoryBanner from '../CategoryBanner/CategoryBanner';

const Categories = ({ categories }) => {
  console.log('categories ', categories);

  const categoryBanners = categories.map(({ category, category_avatar, panels }) => {
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
      {categoryBanners}
    </>
  );
};

export default Categories;
