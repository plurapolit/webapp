/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import HomePageMetaTags from './HomePageMetaTag';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import QuestionBanner from '../../components/QuestionBanner/QuestionBanner';

const bannerData = [
  {
    category: "Klima",
    text:
      "Sollten die existierenden Subventionen für fossile Energieträger aufgehoben werden?",
    imageUrl:
      "https://plurapolit.de/wp-content/uploads/2019/11/Aussenpolitik.jpg"
  },
  {
    category: "Klima",
    text:
      "Sollten die existierenden Subventionen für fossile Energieträger aufgehoben werden?",
    imageUrl:
      "https://plurapolit.de/wp-content/uploads/2019/11/Aussenpolitik.jpg"
  },
  {
    category: "Klima",
    text:
      "Sollten die existierenden Subventionen für fossile Energieträger aufgehoben werden?",
    imageUrl:
      "https://plurapolit.de/wp-content/uploads/2019/11/Aussenpolitik.jpg"
  },
];

const HomePage = () => {
  const Banners = bannerData.map((banner) => (
    <QuestionBanner {...banner} />
  ));

  return (
    <div>
      <HomePageMetaTags />
      <ContentWrapper>
        {Banners}
      </ContentWrapper>
    </div>
  );
};


export default HomePage;
