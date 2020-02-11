import React, { useState, useEffect } from "react";
import styles from "./PanelComments.module.scss";

import CommentModal from "../CommentModal/CommentModal";
import closeButton from "../../media/images/close.svg";
import microphoneButton from "../../media/images/microphone.svg";
import CommentApi from "../../api/CommentApi";
import Comment from "../Comment/Comment";

const PanelComments = ({
  toggleComments,
  setSong,
  statementId,
  stopPlayer,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userComments, setUserComments] = useState(null);

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

  const commentCta = () => (
    <div className={styles["comments-comment"]} onClick={() => openModal()}>
      <img
        alt="icon"
        src={microphoneButton}
        className={styles["comments-microphone-img"]}
      />
      <div className={styles["comments-comment-text"]}>
        Beitrag kommentieren
      </div>
    </div>
  );

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
            {userComments.comments.map((commentData) => (
              <Comment
                key={commentData.comment.id}
                commentData={commentData}
                setSong={setSong}
              />
            ))}
            {commentCta()}
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
