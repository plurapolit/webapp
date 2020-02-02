const CommentModalHelper = () => {
  const modalStyle = {
    content: {
      marginTop: '60px',
      maxHeight: '100vh',
      maxWidth: '100vw',
      overflowY: 'auto',
      display: 'flex',
      padding: '2rem',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '1rem',
      border: '2px solid #4E0CED',
    },
    overlay: {
      backgroundColor: '#000000cc',
    },
  };
  return {
    modalStyle,
  };
};

export default CommentModalHelper();
