import S3 from 'react-aws-s3';

import { getDatum, getTimeStemp } from '../../helper/helper';

const AudioRecorderHelper = () => {

  const getAudioTitle = (userId) => `${getTimeStemp()}-user-${userId}`;

  const sendToAWS = (audio) => {
    const config = {
      bucketName: process.env.REACT_APP_BUCKETNAME,
      dirName: `statements/${getDatum()}`,
      region: process.env.REACT_APP_REGION,
      accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
    };
    const ReactS3Client = new S3(config);
    const newFileName = audio.name;
    const file = audio;

    const promiseLocation = new Promise((resolve) => {
      ReactS3Client
        .uploadFile(file, newFileName)
        .then((data) => {
          resolve(data.location);
        });
    });
    return promiseLocation;
  };

  const getRecordingPermission = () => {
    const permissionPromise = new Promise((resolve) => {
      const successHandler = (stream) => {
        resolve(true, stream);
      };
      const errorHandler = (error) => {
        resolve(false, error);
      };
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(() => successHandler())
        .catch((error) => errorHandler(error));
    });
    return permissionPromise;
  };

  return {
    sendToAWS,
    getAudioTitle,
    getRecordingPermission,
  };
};

export default AudioRecorderHelper();
