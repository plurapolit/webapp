export const createAudioTrackListFromExpertStatements = (expertStatements, panelTitle) => {
  const array = [];
  expertStatements.forEach((statement) => {
    const { intro } = statement;
    if (intro) {
      const introStatement = {
        audioFile: intro.audio_file_link,
        author: statement.user.full_name,
        statementId: statement.statement.id,
        panelTitle,
        isIntro: true,
      };
      array.push(introStatement);
    }
    const audioStatement = {
      audioFile: statement.statement_audio_file.file_link,
      author: statement.user.full_name,
      statementId: statement.statement.id,
      panelTitle,
    };
    array.push(audioStatement);
  });
  return array;
};
