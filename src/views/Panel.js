import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import NavBar from '../components/NavBar/NavBar';

const Panel = () => {
  const [songFile, setSongFile] = useState('');
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const audios = [
    {
      statement:
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      index: 0,
    },
    {
      statement:
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      index: 1,
    },
    {
      statement:
        'https://plurapolit.de/wp-content/uploads/2019/11/plura-sample.mp3',
      index: 2,
    },
    {
      statement:
        'https://plurapolit-webapi-prod-media.s3.eu-central-1.amazonaws.com/intros/20200119_AfD_Zuschke.mp3',
      index: 3,
    },
  ];

  useEffect(() => {
    const newSong = audios.find(song => song.index === currentSongIndex);
    setSongFile(newSong.statement);
  }, []);

  const findNextSong = async () => {
    await setCurrentSongIndex(currentSongIndex + 1);
    const nextSong = audios.find(song => song.index === currentSongIndex);
    setSongFile(nextSong.statement);
  };

  return (
    <div>
      <NavBar />
      <ReactAudioPlayer src={songFile} onEnded={findNextSong} autoPlay controls />
    </div>
  );
};

export default Panel;
