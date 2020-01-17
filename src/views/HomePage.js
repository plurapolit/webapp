/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import AudioRecorder from '../components/AudioRecorder';

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
    <AudioRecorder />
    <Footer />
  </div>
);

export default HomePage;
