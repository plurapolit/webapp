
const StatementControlsHelper = () => {
  const getStringForNComments = (numberOfComments) => {
    if (numberOfComments === 0) {
      return "Kommentieren";
    }

    if (numberOfComments === 1) {
      return "1 Kommentar";
    }

    return `${numberOfComments} Kommentare`;
  };

  return {
    getStringForNComments,
  };
};

export default StatementControlsHelper();
