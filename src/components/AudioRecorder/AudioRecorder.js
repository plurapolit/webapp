import React, { useState } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import S3 from 'react-aws-s3';
// import moment from 'moment';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });
const uuid = require('uuid/v4');

const AudioRecorder = () => {
  const [audio, setAudio] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [blobURL, setBlobURL] = useState('');
  const [isBlocked, setIsBlocked] = useState(false);

  const getRecordingPermission = () => {
    navigator.mediaDevices.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        setIsBlocked(false);
      },
      () => {
        console.log('Permission Denied');
        setIsBlocked(true);
      });
  };

  const getMicrophone = () => {
    getRecordingPermission();

    if (isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          setIsRecording(true);
        }).catch((e) => console.error(e));
    }
  };

  const stopMicrophone = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        // TODO: change to dynamic mp3 title including user
        const audioTitle = uuid();
        const audioFile = new File(buffer, audioTitle, {
          type: blob.type,
          lastModified: Date.now(),
        });
        const audioURL = URL.createObjectURL(blob);
        setBlobURL(audioURL);
        setIsRecording(false);
        setAudio(audioFile);
      }).catch((e) => console.log(e));
  };

  const toggleMicrophone = () => {
    isRecording ? stopMicrophone() : getMicrophone();
  };

  const submitAudio = () => {
    const config = {
      bucketName: process.env.REACT_APP_BUCKETNAME,
      dirName: 'statements',
      region: process.env.REACT_APP_REGION,
      accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
    };
    const ReactS3Client = new S3(config);
    const newFileName = audio.name;
    const file = audio;
    ReactS3Client
    .uploadFile(file, newFileName)
    .then((data) => {
      // TODO: save S3 string in backend
      console.log('data print', data);
    })
    .catch((err) => console.error(err));
    
    setBlobURL('');
    setAudio(null);
    // API gateway to trigger lambda which creates audio intro with polly
  };
  
  const submitIntro = async () => {
    const requestedData = await {
      firstName: 'Marcus',
      lastName: 'Zierke',
      party: 'HDGDL',
      date: '20. Januar 2020',
      fileName: audio.name,
      dirName: 'intros',
      bucketName: process.env.REACT_APP_BUCKETNAME,
    };


    fetch(
      'https://pxva371qo6.execute-api.eu-central-1.amazonaws.com/prod/polly/createintro',
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestedData),
      },
    );
  };

  const submitFiles = async () => {
    await submitAudio();
    await submitIntro();
  };


  const deleteAudio = () => {
    setBlobURL('');
    setAudio(null);
  };

  // const getPermissionButton = (
  //   <div>
  //     <button onClick={() => getRecordingPermission()} type='button">
  //       Erteile deine Erlaubnis
  //     </button>
  //   </div>
  // );

  // TODO: Exchange hardcoded buttons for Button component!
  const recordVoiceMessageButton = (
    <div>
      <button onClick={() => toggleMicrophone()} type="button">
        {isRecording ? 'Aufnahme stoppen' : 'Aufnahme starten'}
      </button>
    </div>
  );

  // TODO: Exchange hardcoded buttons for Button component!
  const displayAudioOptions = (
    <div>
      <audio src={blobURL} controls />
      <button onClick={submitFiles} type="button">
        Abschicken
      </button>
      <button onClick={() => deleteAudio()} type="button">
        Löschen
      </button>
    </div>
  );

  return (
    <div>
      {recordVoiceMessageButton}
      {blobURL ? displayAudioOptions : ""}
    </div>
  );
};

export default AudioRecorder;
