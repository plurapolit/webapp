import React, { useState } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import S3 from 'react-aws-s3';
import moment from 'moment';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

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
        const timestamp = moment().format('HH-mm-ss');
        const audioTitle = `${timestamp}-userinfo`;
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

  // TODO: Save mp3 to backend, pass user details
  const submitAudio = () => {
    const config = {
      bucketName: process.env.REACT_APP_BUCKETNAME,
      dirName: `${process.env.REACT_APP_DIRNAME}/${moment().format('YYYY-MM-DD')}`,
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
        console.log(data);
      })
      .catch((err) => console.error(err));

    setBlobURL('');
    setAudio(null);
  };

  const deleteAudio = () => {
    setBlobURL('');
    setAudio(null);
  };

  // const getPermissionButton = (
  //   <div>
  //     <button onClick={() => getRecordingPermission()} type="button">
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
      <button onClick={() => submitAudio()} type="button">
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
      {blobURL ? displayAudioOptions : ''}
    </div>
  );
};

export default AudioRecorder;
