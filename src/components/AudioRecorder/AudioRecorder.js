import React, { useState, useEffect } from 'react';

import { isLoaded } from '../../helper/helper';
import Helper from './AudioRecorderHelper';
import Button from '../Button/Button';
import Recorder from '../../helper/Recorder';

const AudioRecorder = ({ userId }) => {
  const [audio, setAudio] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [blobURL, setBlobURL] = useState('');
  const [timerOn, setTimerOn] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (timerOn) {
      setCounter(0);
      const id = setInterval(() => {
        setCounter((prevCount) => prevCount += 1);
      }, 1000);

      return () => {
        clearInterval(id);
      };
    }
  }, [timerOn]);

  const startRecording = () => {
    Helper.getRecordingPermission()
      .then((permission) => {
        if (permission) {
          Recorder.start().then(() => {
            setIsRecording(true);
            setTimerOn(true);
          });
        }
      });
  };

  const stopMicrophone = () => {
    Recorder.stop(Helper.getAudioTitle(userId))
      .then(([audioFile, audioURL]) => {
        setBlobURL(audioURL);
        setAudio(audioFile);
        setIsRecording(false);
        setTimerOn(false);
      });
  };

  const deleteCachedAudio = () => {
    setBlobURL('');
    setAudio(null);
  };

  const send = () => {
    Helper.submitAudio(audio);
    deleteCachedAudio();
  };

  const displayAudioOptions = (
    <div>
      <audio src={blobURL} controls />
      <Button onClick={send}>
        Abschicken
      </Button>
      <Button onClick={deleteCachedAudio}>
        Löschen
      </Button>
    </div>
  );

  if (isRecording) {
    return (
      <>
        <Button onClick={stopMicrophone}>
          Aufname stoppen
        </Button>
        <div>
          {counter}
        </div>
      </>
    );
  }

  return (
    <>
      <Button onClick={startRecording}>
        Aufname starten
      </Button>
      <div>
        {isLoaded(blobURL, displayAudioOptions)}
      </div>
    </>
  );
};

export default AudioRecorder;
