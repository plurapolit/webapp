const CommentModalHelper = () => {
  const modalStyle = {
    content: {
      position: "fixed",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      marginTop: "3rem",
      minHeight: "2rem",
      maxHeight: "70rem",
      width: "90vw",
      maxWidth: "50rem",
      overflowY: "auto",
      padding: "2rem",
      borderRadius: "1rem",
      border: "2px solid #4E0CED",
    },
    overlay: {
      backgroundColor: "#000000cc",
    },
  };
  return {
    modalStyle,
  };
};

export default CommentModalHelper();
