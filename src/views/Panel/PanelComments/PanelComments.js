import React, { useState, useEffect } from "react";
import { If } from "react-if";

import { useStoreContext } from "../../../contexts/StoreContext/StoreContext";
import { useModalContext } from "../../../contexts/ModalContext/ModalContext";
import Button from "../../../components/Button/Button";
import closeButton from "../../../assets/images/close.svg";
import CommentApi from "../../../api/CommentApi";
import Comment from "../Comment/Comment";
import CommentEditor from "../CommentEditor/CommentEditor";
import Notification from "../../../helper/NotificationHelper";
import SignInWrapper from "../SignInWrapper/SignInWrapper";

import styles from "./PanelComments.module.scss";

const PanelComments = ({
  toggleComments,
  statementId,
  panelTitle,
}) => {
  const [commenting, setCommenting] = useState(false);
  const [userComments, setUserComments] = useState(null);
  const { user, getClassRoomInviteCode } = useStoreContext();
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
        <SignInWrapper closeModal={
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
  const inviteCode = getClassRoomInviteCode();

  const saveComment = (textRecord) => {
    CommentApi.postText(
      statementId,
      textRecord,
      inviteCode,
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
          {userComments
          && (userComments.comments.map((commentData) => {
            if (commentData.text_record && commentData.text_record.room_id === inviteCode) {
              return (
                <Comment
                  key={commentData.comment.id}
                  commentData={commentData}
                  panelTitle={panelTitle}
                  statementId={statementId}
                />
              );
            }
            return null;
          }))}
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
