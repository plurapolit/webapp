export const createAudioTrackListFromExpertStatements = (expertStatements, panelTitle) => {
  const audioTrackList = expertStatements.map((statement) => ({
    audioFile: statement.statement_audio_file.file_link,
    author: statement.user.full_name,
    statementId: statement.statement.id,
    intro: statement.intro.audio_file_link,
    panelTitle,
  }));
  return audioTrackList;
};
