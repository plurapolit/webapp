import S3 from 'react-aws-s3';
import { getDatum, getTimeStemp } from '../../helper/helper';

const AudioRecorderHelper = () => {

  const getAudioTitle = (userId) => `${getTimeStemp()}-user-${userId}`;

  // TODO: Save mp3 to backend, pass user details
  const submitAudio = (audio) => {
    // TODO: update .env file
    const config = {
      bucketName: process.env.REACT_APP_BUCKETNAME,
      dirName: `${process.env.REACT_APP_DIRNAME}/${getDatum()}`,
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
    submitAudio,
    getAudioTitle,
    getRecordingPermission,
  };
};

export default AudioRecorderHelper();
