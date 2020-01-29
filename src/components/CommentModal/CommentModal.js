import React from 'react';
import Modal from '../Modal/Modal';

import StoreContext from '../../layouts/Store/StoreContext';
import AudioRecorder from '../AudioRecorder/AudioRecorder';
import SignInComponent from '../SignInComponent/SignInComponent';
import { setNotification } from '../../helper/helper';

const CommentModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
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
