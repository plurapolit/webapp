import playButton from "../../../../assets/images/play.svg";
import currentlyPlayingButton from "../../../../assets/images/speaker.svg";
import currentlyStoppedButton from "../../../../assets/images/speaker-stopped.svg";

const StatementControlsHelper = () => {
  const getStringForNComments = (numberOfComments) => {
    if (numberOfComments === 0) {
      return "Kommentieren";
    }

    if (numberOfComments === 1) {
      return "1 Kommentar";
    }

    return `Kommentare`;
  };

  const playButtonImage = (thisStatementIsSelected, paused) => {
    if (thisStatementIsSelected && paused) {
      return currentlyStoppedButton;
    }
    if (thisStatementIsSelected) {
      return currentlyPlayingButton;
    }
    return playButton;
  };

  return {
    getStringForNComments,
    playButtonImage,
  };
};

export default StatementControlsHelper();
