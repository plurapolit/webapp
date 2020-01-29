import React from 'react';
import Modal from '../Modal/Modal';

import StoreContext from '../../layouts/Store/StoreContext';
import AudioRecorder from '../AudioRecorder/AudioRecorder';
import SignInComponent from '../SignInComponent/SignInComponent';
import { setNotification } from '../../helper/helper';
import { findByLabelText } from '@testing-library/react';

const CommentModal = ({ isOpen, onClose }) => {

  const customStyle = {
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
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} style={customStyle}>
      <StoreContext.Consumer>
        {(data) => {
          if (data.user) {
            return (
              <AudioRecorder userId={data.user.id} />
            );
          }
          setNotification({ message: 'Um diesen Service zu nutzen, müssen Sie sich anmelden.', type: 'warning' });
          return (
            <SignInComponent setUser={data.setUser} />
          );
        }}
      </StoreContext.Consumer>
    </Modal>
  );
};

export default CommentModal;
