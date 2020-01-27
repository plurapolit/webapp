import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import ReactAudioPlayer from 'react-audio-player';
import NavBar from '../components/NavBar/NavBar';
=======
import NavBar from '../components/Navbar/Navbar';
import Player from '../components/Player/Player';
>>>>>>> e5a04cc1b26023156130d2f90f1e2c0cf8303d95

const Panel = () => {
  const [songFile, setSongFile] = useState('');
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const audios = [
    {
      statement:
<<<<<<< HEAD
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
=======
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
>>>>>>> e5a04cc1b26023156130d2f90f1e2c0cf8303d95
      index: 0,
    },
    {
      statement:
<<<<<<< HEAD
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
=======
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
>>>>>>> e5a04cc1b26023156130d2f90f1e2c0cf8303d95
      index: 1,
    },
    {
      statement:
<<<<<<< HEAD
        'https://plurapolit.de/wp-content/uploads/2019/11/plura-sample.mp3',
=======
        "https://plurapolit.de/wp-content/uploads/2019/11/plura-sample.mp3",
>>>>>>> e5a04cc1b26023156130d2f90f1e2c0cf8303d95
      index: 2,
    },
    {
      statement:
<<<<<<< HEAD
        'https://plurapolit-webapi-prod-media.s3.eu-central-1.amazonaws.com/intros/20200119_AfD_Zuschke.mp3',
=======
        "https://plurapolit-webapi-prod-media.s3.eu-central-1.amazonaws.com/intros/20200119_AfD_Zuschke.mp3",
>>>>>>> e5a04cc1b26023156130d2f90f1e2c0cf8303d95
      index: 3,
    },
  ];

  useEffect(() => {
<<<<<<< HEAD
    const newSong = audios.find(song => song.index === currentSongIndex);
    setSongFile(newSong.statement);
=======
    setInterval(async () => {
      const currentSong = document.getElementsByTagName('audio');
      if (currentSong.length !== 0 && currentSong[0].currentTime === currentSong[0].duration) {
        const currentIndex = audios.find((song) => song.statement === currentSong[0].currentSrc).index;
        if (currentIndex !== audios.length - 1) {
          const newSong = await audios.find((song) => song.index === currentIndex + 1).statement;
          await setActive(false);
          await setSongFile(newSong);
          setActive(true);
        }
      }
    }, 1000);
>>>>>>> e5a04cc1b26023156130d2f90f1e2c0cf8303d95
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
