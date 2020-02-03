const CommentModalHelper = () => {
  const modalStyle = {
    content: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      marginTop: '3rem',
      height: '80vh',
      maxHeight: '70rem',
      width: '90vh',
      maxWidth: '50rem',
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
