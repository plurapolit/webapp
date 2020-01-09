import React from 'react';
import MicRecorder from 'mic-recorder-to-mp3';

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
  }

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
        console.log('stopmicrophone', buffer, blob)
        const blobURL = URL.createObjectURL(blob)
        this.setState({ blobURL, isRecording: false });
      }).catch((e) => console.log(e));
  };

  toggleMicrophone = () => {
    this.state.isRecording ? this.stopMicrophone() : this.getMicrophone();
  };

  // TODO: Save mp3 to S3 Bucket
  submitAudio = () => {
    console.log('SUBMIT')
    alert('Deine Aufnahme wurde gesendet.')
    this.setState({ blobURL: '', audio: null });
  }

  deleteAudio = () => {
    this.setState({blobURL: '', audio: null});
    console.log('deleteAudio', this.state.blobURL)
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
