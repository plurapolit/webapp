import React, { useState, useRef } from 'react';
import Modal from '../Modal/Modal';

import StoreContext from '../../layouts/Store/StoreContext';
import AudioRecorder from '../AudioRecorder/AudioRecorder';
import SignInComponent from '../SignInComponent/SignInComponent';
import Notification from '../../helper/Notification';
import CommentApi from '../../api/CommentApi';
import Helper from './CommentModalHelper';
import AcceptTerms from '../AcceptTerms/AcceptTerms';
import AddQuote from '../AddQuote/AddQuote';

const CommentModal = ({ isOpen, closeModal, statementId }) => {
  const [page, setPage] = useState(1);
  const quote = useRef(undefined);
  const fileLink = useRef(undefined);
  const duration = useRef(undefined);

  const setQuote = (newQuote) => {
    quote.current = newQuote;
  };

  const setFileLink = (newFileLink) => {
    fileLink.current = newFileLink;
  };

  const setDuration = (newDuration) => {
    duration.current = newDuration;
  };

  const sendToRails = () => {
    CommentApi.post(statementId, quote.current, fileLink.current, duration.current)
      .then(() => {
        Notification.success('Danke für deine Einsendung. Wir überprüfen, ob das Statement unseren Nutzungsbedingungen entspricht, und schalten es dann frei.');
        closeModal();
      });
  };

  const nextPage = () => {
    setPage((prevPage) => prevPage += 1);
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} style={Helper.modalStyle}>
      <StoreContext.Consumer>
        {(data) => {
          if (!data.user) {
            Notification.warning('Um diesen Service zu nutzen, müssen Sie sich anmelden.');
            return (
              <SignInComponent setUser={data.setUser} />
            );
          }
          switch (page) {
            case 1:
              return <AcceptTerms nextPage={nextPage} />;
            case 2:
              return <AudioRecorder setFileLink={setFileLink} setDuration={setDuration} nextPage={nextPage} />;
            case 3:
              return <AddQuote setQuote={setQuote} sendToRails={sendToRails} />;
            default:
              // TODO: Error handling
              break;
          }
        }}
      </StoreContext.Consumer>
    </Modal>
  );
};

export default CommentModal;
