import React, { useState, useEffect } from 'react';

import { isLoaded } from '../../helper/helper';
import Helper from './AudioRecorderHelper';
import Button from '../Button/Button';
import Recorder from '../../helper/Recorder';

import styles from './AudioRecorder.module.scss';

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

  if (isRecording) {
    return (
      <div className={styles["container"]}>
        <div className={styles["counter-wrapper"]}>
          <div className={styles["counter"]}>
            {counter}
          </div>
          <span className={styles["effect"]} />
          <span className={styles["effect2"]} />
        </div>
        <Button onClick={stopMicrophone}>
          Aufname stoppen
        </Button>
      </div>
    );
  }

  if (blobURL) {
    return (
      <div className={styles["container"]}>
        <audio src={blobURL} controls />
        <div className={styles["button-container"]}>
          <Button onClick={deleteCachedAudio}>
            Löschen
          </Button>
          <Button onClick={send}>
            Abschicken
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles["container"]}>
      <Button onClick={startRecording}>
        Aufname starten
      </Button>
    </div>
  );
};

export default AudioRecorder;
