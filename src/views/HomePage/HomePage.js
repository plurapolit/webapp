/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import HomePageMetaTags from './HomePageMetaTag';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import About from '../../components/About/About';
import { isLoaded } from '../../helper/helper';
import CategoryList from '../../components/CategoryList/CategoryList';

const HomePage = ({ categoryList }) => (
  <div>
    <HomePageMetaTags />
    <HomeHeader />
    <About />
    {isLoaded(categoryList, <CategoryList categoryList={categoryList} />)}
  </div>
);

export default HomePage;
