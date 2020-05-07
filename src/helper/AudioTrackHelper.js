export const createAudioTrackListFromExpertStatements = (expertStatements, panelTitle) => {
  const audioTrackList = expertStatements.map((statement) => {
    let intro;
    if (statement.intro) intro = statement.intro.audio_file_link;
    return {
      audioFile: statement.statement_audio_file.file_link,
      author: statement.user.full_name,
      statementId: statement.statement.id,
      intro,
      transcription: statement.transcription,
      panelTitle,
    };
  });
  return audioTrackList;
};

export const createIntroStatement = (statement) => ({
  ...statement,
  content: {
    ...statement.content,
    audioFile: statement.content.intro,
    isIntro: true,
  },
});

export const getCurrentStatementsFromAudioTrack = (statement) => {
  if (!statement) return undefined;
  const { content, notIntro } = statement;
  const statementList = [];
  if (content.intro && !notIntro) statementList.push(createIntroStatement(statement));
  statementList.push(statement);
  return statementList;
};
