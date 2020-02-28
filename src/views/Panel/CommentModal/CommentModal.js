import React, {
  useState,
  useRef,
} from "react";

import { useStoreContext } from "../../../contexts/StoreContext/StoreContext";
import AudioRecorder from "../../../layouts/AudioRecorder/AudioRecorder";
import SignInComponent from "../../../components/SignInComponent/SignInComponent";
import Notification from "../../../helper/NotificationHelper";
import CommentApi from "../../../api/CommentApi";
import AcceptTerms from "../AcceptTerms/AcceptTerms";
import AddQuote from "../AddQuote/AddQuote";

const CommentModal = ({ closeModal, statementId }) => {
  const [page, setPage] = useState(1);
  const quote = useRef(undefined);
  const fileLink = useRef(undefined);
  const duration = useRef(undefined);
  const { user } = useStoreContext();

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

  if (!user) {
    Notification.warning(
      "Um diesen Service zu nutzen, musst du dich anmelden.",
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

export default CommentModal;
