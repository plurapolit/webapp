/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import HomePageMetaTags from './HomePageMetaTag';
import { isLoaded } from '../../helper/helper';
import Categories from '../../components/Categories/Categories';

const HomePage = ({ categories }) => (
  <div>
    <HomePageMetaTags />
    {isLoaded(categories, <Categories categories={categories} />)}
  </div>
);

export default HomePage;
