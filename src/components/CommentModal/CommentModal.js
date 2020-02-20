import React, {
  useState,
  useRef,
  useEffect,
  useContext,
} from "react";
import Modal from "../Modal/Modal";

import { StoreContext } from "../../layouts/Store/StoreContext";
import AudioRecorder from "../AudioRecorder/AudioRecorder";
import SignInComponent from "../SignInComponent/SignInComponent";
import Notification from "../../helper/Notification";
import CommentApi from "../../api/CommentApi";
import Helper from "./CommentModalHelper";
import AcceptTerms from "../AcceptTerms/AcceptTerms";
import AddQuote from "../AddQuote/AddQuote";
import CloseButton from "../CloseButton/CloseButton";

const CommentModal = ({ isOpen, closeModal, statementId }) => {
  const [page, setPage] = useState(1);
  const quote = useRef(undefined);
  const fileLink = useRef(undefined);
  const duration = useRef(undefined);
  const { user } = useContext(StoreContext);

  const setQuote = (newQuote) => {
    quote.current = newQuote;
  };

  useEffect(() => {
    if (!isOpen) {
      setPage(1);
    }
  }, [isOpen]);

  const setFileLink = (newFileLink) => {
    fileLink.current = newFileLink;
  };

  const setDuration = (newDuration) => {
    duration.current = newDuration;
  };

  const sendToRails = () => {
    CommentApi.post(
      statementId,
      quote.current,
      fileLink.current,
      duration.current,
    ).then(() => {
      Notification.success(
        "Danke für deine Einsendung. Wir überprüfen, ob das Statement unseren Nutzungsbedingungen entspricht, und schalten es dann frei.",
      );
      closeModal();
    });
  };

  const nextPage = () => {
    setPage((prevPage) => (prevPage + 1));
  };

  const getContent = () => {
    if (!user && isOpen) {
      Notification.warning(
        "Um diesen Service zu nutzen, müssen Sie sich anmelden.",
      );
      return <SignInComponent />;
    }
    switch (page) {
      case 1:
        return <AcceptTerms nextPage={nextPage} />;
      case 2:
        return (
          <AudioRecorder
            setFileLink={setFileLink}
            setDuration={setDuration}
            nextPage={nextPage}
          />
        );
      case 3:
        return <AddQuote setQuote={setQuote} sendToRails={sendToRails} />;
      default:
        // TODO: Error handling
        break;
    }
    return undefined;
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal} style={Helper.modalStyle}>
      <CloseButton onClick={closeModal} />
      {getContent()}
    </Modal>
  );
};

export default CommentModal;
