import React from 'react';
import styles from './CategoryBanner.module.scss';

const CategoryBanner = ({ category }) => {

  return (
    <div className={styles['container']}>
      <div className={styles['text']}>{category.name}</div>
    </div>
  );
};

export default CategoryBanner;
