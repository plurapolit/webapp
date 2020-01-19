/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '../components/NavBar/NavBar';
import AudioRecorder from '../components/AudioRecorder/AudioRecorder';

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
  </div>
);

export default HomePage;
