import React, { useState, useEffect } from "react";
import { If } from "react-if";

import { useStoreContext } from "../../../contexts/StoreContext/StoreContext";
import { useModalContext } from "../../../contexts/ModalContext/ModalContext";
import Button from "../../../components/Button/Button";
import closeButton from "../../../assets/images/close.svg";
import CommentApi from "../../../api/CommentApi";
import Comment from "../Comment/Comment";
import AnswerDisclaimer from "../AnswerDisclaimer/AnswerDisclaimer";
import SignInComponent from "../../../components/SignInComponent/SignInComponent";
import CommentEditor from "../CommentEditor/CommentEditor";
import Notification from "../../../helper/NotificationHelper";

import styles from "./PanelComments.module.scss";

const PanelComments = ({
  toggleComments,
  statementId,
  expertFullName,
  statementDate,
  panelTitle,
}) => {
  const [commenting, setCommenting] = useState(false);
  const [userComments, setUserComments] = useState(null);
  const [answered, setAnswered] = useState(false);
  const { user } = useStoreContext();
  const modal = useModalContext();

  useEffect(() => {
    const fetchUserComments = async () => {
      const res = await CommentApi.getComments(statementId);
      if (res.status === 204) {
        return;
      }
      const json = await res.json();
      setUserComments(json);
    };
    fetchUserComments();
  }, [statementId]);

  const handleCommenting = () => {
    if (!user) {
      modal.showContent(
        <SignInComponent routeBack={
          () => {
            modal.closeModal();
            setCommenting(true);
          }
        }
        />,
      );
    }
    if (user) setCommenting(true);
  };

  const saveComment = (textRecord) => {
    CommentApi.postText(
      statementId,
      textRecord,
    ).then(() => {
      Notification.success(
        "Danke für deine Einsendung. Wir überprüfen, ob das Statement unseren Nutzungsbedingungen entspricht, und schalten es in den nächsten 24 Stunden frei.",
      );
    });
  };

  return (
    <div>
      <div className={styles["comments-wrapper"]}>
        <div className={styles["comments-card-wrapper"]}>
          {userComments && !answered && (
            <AnswerDisclaimer
              expertFullName={expertFullName}
              statementDate={statementDate}
              commentLength={userComments.comments.length}
            />
          )}
          {userComments
          && (userComments.comments.map((commentData) => (
            <Comment
              key={commentData.comment.id}
              commentData={commentData}
              setAnswered={setAnswered}
              panelTitle={panelTitle}
              statementId={statementId}
            />
          )))}
          <If condition={!commenting}>
            <Button onClick={handleCommenting} dataTest="create-comment-button">
              <div className={styles["comments-comment-text"]}>
                Beitrag kommentieren
              </div>
            </Button>
          </If>
          <If condition={commenting}>
            <CommentEditor setCommenting={setCommenting} onSend={saveComment} />
          </If>
        </div>
        <img
          alt="icon"
          src={closeButton}
          className={styles["comments-close"]}
          onClick={() => toggleComments()}
        />
      </div>
    </div>
  );
};
export default PanelComments;
