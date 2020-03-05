import React from "react";

import { usePlayerContext } from "../../../contexts/PlayerContext/PlayerContext";
import Button from "../../../components/Button/Button";

const PlayAllButton = ({
  expertStatements,
  panelTitle,
}) => {
  const { setAudios } = usePlayerContext();
  const audios = expertStatements.map((statement) => ({
    audioFile: statement.statement_audio_file.file_link,
    author: statement.user.full_name,
    statementId: statement.statement.id,
    panelTitle,
  }));

  const handleClick = () => {
    setAudios(audios);
  };

  return (
    <Button
      onClick={handleClick}
    >
      Alle abspielen
    </Button>
  );
};

export default PlayAllButton;
