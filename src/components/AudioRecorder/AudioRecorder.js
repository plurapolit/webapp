import React, { useState, useEffect } from 'react';

import Helper from './AudioRecorderHelper';
import Button from '../Button/Button';
import Recorder from '../../helper/Recorder';

import styles from './AudioRecorder.module.scss';
import microphoneButton from '../../media/images/microphone.svg';

const AudioRecorder = ({
  setFileLink, setDuration, nextPage,
}) => {
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
    Recorder.stop()
      .then(([audioFile, audioURL]) => {
        setBlobURL(audioURL);
        setAudio(audioFile);
        setIsRecording(false);
        setDuration(counter);
        setTimerOn(false);
      });
  };

  const deleteCachedAudio = () => {
    setBlobURL('');
    setAudio(null);
  };

  const send = () => {
    Helper.sendToAWS(audio)
      .then((fileLink) => {
        setFileLink(fileLink);
        nextPage();
      });
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
        <Button onClick={() => stopMicrophone()}>
          Aufname stoppen
        </Button>
        <div className={styles["step-index"]}>Schritt 2 von 4</div>
      </div>
    );
  }

  if (blobURL) {
    return (
      <div className={styles["container"]}>
        <div className={styles["recording-headline"]}>Zufrieden?</div>
        <div className={styles["recorded-audio"]}>
          <audio src={blobURL} controls />
        </div>
        <div className={styles["button-container"]}>
          <div className={styles["delete-audio"]} onClick={deleteCachedAudio}>
            Neu aufnehmen
          </div>
          <Button onClick={send}>
            Weiter
          </Button>
        </div>
        <div className={styles["step-index"]}>Schritt 3 von 4</div>
      </div>
    );
  }

  return (
    <div className={styles["container"]}>
      <div
        className={styles['recording-button']}
        onClick={startRecording}
      >
        <img alt="icon" src={microphoneButton} className={styles['recording-button-img']} />
        <div className={styles['recording-button-text']}>Aufnahme starten</div>
      </div>
      <div className={styles["step-index"]}>Schritt 2 von 4</div>
    </div>
  );
};

export default AudioRecorder;
