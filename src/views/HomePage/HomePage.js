/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import HomePageMetaTags from './HomePageMetaTag';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import About from '../../components/About/About';
import MoreSection from '../../components/MoreSection/MoreSection';
import { isLoaded } from '../../helper/helper';
import Categories from '../../components/Categories/Categories';

const HomePage = ({ categories }) => (
  <div>
    <HomePageMetaTags />
    <HomeHeader />
    <About />
    {isLoaded(categories, <Categories categories={categories} />)}
    <MoreSection />

  </div>
);

export default HomePage;
