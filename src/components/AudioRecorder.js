import React from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import S3 from 'react-aws-s3';
import moment from 'moment';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class AudioRecorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: null,
      isRecording: false,
      blobURL: '',
      isBlocked: false,
    };
  };

  getMicrophone = () => {
    if (this.state.isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          this.setState({ isRecording: true });
        }).catch((e) => console.error(e));
    }
  };

  stopMicrophone = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        // TODO: change to dynamic mp3 title including user 
        const timestamp = moment().format('HH-mm-ss');
        const audioTitle = `${timestamp}-userinfo`;
        const audio = new File(buffer, audioTitle, {
          type: blob.type,
          lastModified: Date.now()
        });
        const blobURL = URL.createObjectURL(blob)
        this.setState({ blobURL, isRecording: false, audio });
      }).catch((e) => console.log(e));
  };

  toggleMicrophone = () => {
    this.state.isRecording ? this.stopMicrophone() : this.getMicrophone();
  };

  // TODO: Save mp3 to backend, pass user details
  submitAudio = () => {
    const config = {
      bucketName: process.env.REACT_APP_BUCKETNAME,
      dirName: `${process.env.REACT_APP_DIRNAME}/${moment().format('YYYY-MM-DD')}`,
      region: process.env.REACT_APP_REGION,
      accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
    }

    const ReactS3Client = new S3(config);
    const newFileName = this.state.audio.name;
    const file = this.state.audio
    console.log('submitAudio', file)
    ReactS3Client
      .uploadFile(file, newFileName)
      .then(data => {
        // TODO: save S3 string in backend
        console.log(data);
      })
      .catch(err => console.error(err))

   //  alert('Deine Aufnahme wurde gesendet.')
    this.setState({ blobURL: '', audio: null });
  }

  deleteAudio = () => {
    this.setState({blobURL: '', audio: null});
  }

  // TODO: Exchange hardcoded buttons for Button component!
  recordVoiceMessageButton = () => {
    return (
      <div>
        <button onClick={() => this.toggleMicrophone()} type="button">
          {this.state.isRecording ? 'Aufnahme stoppen' : 'Aufnahme starten'}
        </button>
      </div>
    );
  }

  // TODO: Exchange hardcoded buttons for Button component!
  displayAudioOptions = () => {
    return (
    <div>
      <audio src={this.state.blobURL} controls />
      <button onClick={() => this.submitAudio()} type="button">
        Abschicken
      </button>
      <button onClick={() => this.deleteAudio()} type="button">
        Löschen
      </button>
    </div>
    );
  }

  render() {
    return (
      <div>
        <header>
          {this.recordVoiceMessageButton()}
          {this.state.blobURL ? this.displayAudioOptions() : ''}
        </header>
      </div>
    );
  }

  componentDidMount() {
    // TODO: have permission alert popup on button click 
    navigator.mediaDevices.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        this.setState({ isBlocked: false });
      },
      () => {
        console.log('Permission Denied');
        this.setState({ isBlocked: true })
      },
    );
  }
}

export default AudioRecorder;
