import React from "react";

// import audio1 from "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
// import audio2 from "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3";
// import audio3 from "https://plurapolit.de/wp-content/uploads/2019/11/plura-sample.mp3";

class UserCard extends React.Component {
  constructor(props) {
    super(props);

    this.audios = props.list.map((audio) => new Audio(audio));
  }

  getCurrentAudio() {
    console.log(
      "audio",
      this.audios.find((audio) => audio.paused === false),
    );
    return this.audios.find((audio) => audio.paused === false);
  }

  toggle(nextAudio) {
    const currentAudio = this.getCurrentAudio();

    if (currentAudio && currentAudio !== nextAudio) {
      currentAudio.pause();
    }

    nextAudio.paused ? nextAudio.play() : nextAudio.pause();
  }

  render() {
    return (
      <div>
        {this.audios.map((audio, index) => (
          <button onClick={() => this.toggle(audio)}>
PLAY AUDIO
            {index}
          </button>
        ))}
      </div>
    );
  }
}

export default () => (
  <UserCard
    list={[
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      "https://plurapolit.de/wp-content/uploads/2019/11/plura-sample.mp3",
    ]}
  />
);
