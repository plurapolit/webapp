import React from 'react';
import CategoryBanner from '../CategoryBanner/CategoryBanner';

const Categories = ({ categories }) => {
  const categoryBanners = categories.map(({ category, category_avatar, panels }) => {
    category_avatar = 'https://picsum.photos/id/237/1000/200';
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
