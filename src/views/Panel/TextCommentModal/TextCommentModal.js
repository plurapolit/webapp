import React, {
  useState,
} from "react";

import { useStoreContext } from "../../../contexts/StoreContext/StoreContext";
import SignInComponent from "../../../components/SignInComponent/SignInComponent";
import Notification from "../../../helper/NotificationHelper";
import CommentApi from "../../../api/CommentApi";
import AcceptTerms from "../AcceptTerms/AcceptTerms";
import TextRecord from "../TextRecord/TextRecord";

const TextCommentModal = ({ closeModal, statementId }) => {
  const [page, setPage] = useState(1);
  const { user } = useStoreContext();

  const sendToRails = (textRecord) => {
    CommentApi.postText(
      statementId,
      textRecord,
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
      return <TextRecord sendToRails={sendToRails} />;
    default:
      // TODO: Error handling
      break;
  }
  return undefined;
};

export default TextCommentModal;
