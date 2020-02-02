const CommentModalHelper = () => {
  const modalStyle = {
    content: {
      top: '50%',
      left: '50%',
      width: '90%',
      maxWidth: '40rem',
      minWidth: '20rem',
      minHeight: '40rem',
      transform: 'translate(-50%, -50%)',
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
