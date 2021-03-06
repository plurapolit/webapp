import MicRecorder from "mic-recorder-to-mp3";
import uid from "uid";

const Recorder = () => {
  const Mp3Recorder = new MicRecorder({ bitRate: 256 });

  const stop = () => {
    const promise = new Promise((resolve) => {
      Mp3Recorder.stop()
        .getMp3()
        .then(([buffer, blob]) => {
          const audioFile = new File(buffer, uid(20), {
            type: blob.type,
            lastModified: Date.now(),
          });
          const audioURL = URL.createObjectURL(blob);
          resolve([audioFile, audioURL]);
        });
    });
    return promise;
  };

  const start = () => {
    const promise = new Promise((resolve) => {
      Mp3Recorder.start().then(() => {
        resolve(true);
      });
    });
    return promise;
  };

  return {
    stop,
    start,
  };
};

export default Recorder();
