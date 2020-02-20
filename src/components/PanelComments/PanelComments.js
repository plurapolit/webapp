import React, { useState, useEffect, useContext } from "react";

import { PlayerContext } from "../../layouts/Player/PlayerContext";
import Button from "../Button/Button";
import CommentModal from "../CommentModal/CommentModal";
import closeButton from "../../media/images/close.svg";
import microphoneButton from "../../media/images/microphone.svg";
import CommentApi from "../../api/CommentApi";
import Comment from "../Comment/Comment";
import AnswerDisclaimer from "../AnswerDisclaimer/AnswerDisclaimer";

import styles from "./PanelComments.module.scss";
import { ModalContext } from "../../layouts/Modal/ModalContext";

const PanelComments = ({
  toggleComments,
  statementId,
  expertFullName,
  statementDate,
}) => {
  const [userComments, setUserComments] = useState(null);
  const [answered, setAnswered] = useState(false);
  const modal = useContext(ModalContext);
  const { stopPlayer } = useContext(PlayerContext);

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

  const openCommentModal = () => {
    stopPlayer();
    modal.showContent(
      <CommentModal
        closeModal={modal.closeModal}
        statementId={statementId}
      />,
    );
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
            />
          )))}
          <Button onClick={() => openCommentModal()}>
            <img
              alt="icon"
              src={microphoneButton}
              className={styles["comments-microphone-img"]}
            />
            <div className={styles["comments-comment-text"]}>
              Beitrag kommentieren
            </div>
          </Button>
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
