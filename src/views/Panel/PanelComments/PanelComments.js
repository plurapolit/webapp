import React, { useState, useEffect, useContext } from "react";

import { usePlayerContext } from "../../../contexts/PlayerContext/PlayerContext";
import Button from "../../../components/Button/Button";
import TextCommentModal from "../TextCommentModal/TextCommentModal";
import closeButton from "../../../assets/images/close.svg";
import commentIcon from "../../../assets/images/speech-bubble-outline.svg";
import CommentApi from "../../../api/CommentApi";
import Comment from "../Comment/Comment";
import AnswerDisclaimer from "../AnswerDisclaimer/AnswerDisclaimer";

import styles from "./PanelComments.module.scss";
import { ModalContext } from "../../../contexts/ModalContext/ModalContext";

const PanelComments = ({
  toggleComments,
  statementId,
  expertFullName,
  statementDate,
  panelTitle,
}) => {
  const [userComments, setUserComments] = useState(null);
  const [answered, setAnswered] = useState(false);
  const modal = useContext(ModalContext);
  const { pausePlayer } = usePlayerContext();

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
    pausePlayer();
    modal.showContent(
      <TextCommentModal
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
              panelTitle={panelTitle}
            />
          )))}
          <Button onClick={() => openCommentModal()} dataTest="create-comment-button">
            <img
              alt="icon"
              src={commentIcon}
              className={styles["comments-icon-img"]}
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
