import React, { useState, useEffect } from "react";

import Button from "../Button/Button";
import CommentModal from "../CommentModal/CommentModal";
import closeButton from "../../media/images/close.svg";
import microphoneButton from "../../media/images/microphone.svg";
import CommentApi from "../../api/CommentApi";
import Comment from "../Comment/Comment";
import AnswerDisclaimer from "../AnswerDisclaimer/AnswerDisclaimer";

import styles from "./PanelComments.module.scss";

const PanelComments = ({
  toggleComments,
  setSong,
  statementId,
  stopPlayer,
  expertFullName,
  statementDate,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userComments, setUserComments] = useState(null);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    const fetchUserComments = async () => {
      await CommentApi.getComments(statementId)
        .then((res) => res.json())
        .then((json) => setUserComments(json));
    };
    fetchUserComments();
  }, [statementId]);

  const openModal = () => {
    stopPlayer();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (userComments) {
    return (
      <div>
        <CommentModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          statementId={statementId}
        />
        <div className={styles["comments-wrapper"]}>
          <div className={styles["comments-card-wrapper"]}>
            {answered ? null : (
              <AnswerDisclaimer
                expertFullName={expertFullName}
                statementDate={statementDate}
                commentLength={userComments.comments.length}
              />
            )}
            {userComments.comments.map((commentData) => (
              <Comment
                key={commentData.comment.id}
                commentData={commentData}
                setSong={setSong}
                setAnswered={setAnswered}
              />
            ))}
            <Button onClick={() => openModal()}>
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
  }
  return null;
};

export default PanelComments;
