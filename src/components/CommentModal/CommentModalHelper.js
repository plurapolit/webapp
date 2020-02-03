const CommentModalHelper = () => {
  const modalStyle = {
    content: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      marginTop: '6rem',
      height: '80vh',
      width: '90vh',
      maxWidth: '60rem',
      overflowY: 'auto',
      padding: '2rem',
      display: 'flex',
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
