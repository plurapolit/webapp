import React, { useState, useEffect } from 'react';
import Player from '../components/Player/Player';

const Audioplayer = () => {
  const [active, setActive] = useState(false);
  const [songFile, setSongFile] = useState('');

  const audios = [
    {
      statement:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      index: 0,
    },
    {
      statement:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      index: 1,
    },
    {
      statement:
        "https://plurapolit.de/wp-content/uploads/2019/11/plura-sample.mp3",
      index: 2,
    },
    {
      statement:
        "https://plurapolit-webapi-prod-media.s3.eu-central-1.amazonaws.com/intros/20200119_AfD_Zuschke.mp3",
      index: 3,
    },
  ];

  useEffect(() => {
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
  }, []);

  const setPlayer = async (song) => {
    await setActive(false);
    setSongFile(song);
    setActive(true);
  };

  return (
    <div>
      {audios.map((song, index) => {
        return (
          <button onClick={() => setPlayer(song.statement)}>play song {index}</button>
        );
      })}
      {active && <Player playerActive={active} file={songFile} />}
    </div>
  );
};

export default Audioplayer;
