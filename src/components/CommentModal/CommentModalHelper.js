const CommentModalHelper = () => {
  const modalStyle = {
    content: {
      top: '50%',
      left: '50%',
      width: '90%',
      maxWidth: '40rem',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '1rem',
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
