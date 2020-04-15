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

  const sendToApi = (textRecord) => {
    CommentApi.postText(
      statementId,
      textRecord,
    ).then(() => {
      Notification.success(
        "Danke für deine Einsendung. Wir überprüfen, ob das Statement unseren Nutzungsbedingungen entspricht, und schalten es in den nächsten 24 Stunden frei.",
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
    return <SignInComponent onLinkClick={closeModal} />;
  }

  switch (page) {
    case 1:
      return <AcceptTerms nextPage={nextPage} />;
    case 2:
      return <TextRecord sendToApi={sendToApi} />;
    default:
      // TODO: Error handling
      break;
  }
  return undefined;
};

export default TextCommentModal;
