/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ContentWrapper from '../components/ContentWrapper/ContentWrapper';
import Panel from '../components/Panel/Panel';
import QuestionBanner from '../components/QuestionBanner/QuestionBanner';
import AudioRecorder from '../components/AudioRecorder';

const panelData = {
  img: 'some image',
  headline: 'some text',
  partei: 'violet',
  desc: 'Hackamain',
  webpage: 'www.google.de',
};

const bannerData = {
  category: 'Klima',
  text: 'Sollten die existierenden Subventionen für fossile Energieträger aufgehoben werden?',
  imageUrl: 'https://plurapolit.de/wp-content/uploads/2019/11/Aussenpolitik.jpg',
};

const HomePage = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        PluraPolit | Immer am Puls der Zeit
      </title>
      <link rel="canonical" href="https://plurapolit.de" />
      <meta
        name="description"
        content="..."
      />
    </Helmet>
    <NavBar />
    <ContentWrapper>
      <AudioRecorder />
      <QuestionBanner {...bannerData} />
      <Panel {...panelData} />
      <Panel {...panelData} />
      <Panel {...panelData} />

    </ContentWrapper>
    <Footer />
  </div>
);

export default HomePage;
