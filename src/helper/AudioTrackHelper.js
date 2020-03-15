export const createAudioTrackListFromExpertStatements = (expertStatements, panelTitle) => {
  const audios = [];
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
      audios.push(introStatement);
    }
    const audioStatement = {
      audioFile: statement.statement_audio_file.file_link,
      author: statement.user.full_name,
      statementId: statement.statement.id,
      panelTitle,
    };
    audios.push(audioStatement);
  });
  return audios;
};
