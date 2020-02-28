import React, { useState, useContext } from "react";
import { If } from "react-if";

import JwtApi from "../../../api/JwtApi";
import Notification from "../../../helper/NotificationHelper";
import Helper from "./CommentHelper";
import { ModalContext } from "../../../contexts/ModalContext/ModalContext";
import SignInComponent from "../../../components/SignInComponent/SignInComponent";
import CommentAudio from "./CommentAudio/CommentAudio";
import CommentStatement from "./CommentStatement/CommentStatement";
import CommentLike from "./CommentLike/CommentLike";

import styles from "./Comment.module.scss";

const Comment = ({
  commentData,
  setAnswered,
  panelTitle,
}) => {
  const [liked, setLiked] = useState(commentData.likes.liked_by_current_user);
  const [likes, setLikes] = useState(commentData.likes.total_likes);
  const modal = useContext(ModalContext);

  const handleLikeClick = async () => {
    const valid = await JwtApi.validate();
    if (!valid) {
      modal.showContent(
        <SignInComponent routeBack={modal.closeModal} onLinkClick={modal.closeModal} />,
      );
      return Notification.warning(
        "Um diesen Service nutzen zu können, musst du dich anmelden",
      );
    }
    if (liked) {
      Helper.removeLike(commentData.comment.id);
      setLikes((prevLikes) => prevLikes - 1);
      return setLiked(false);
    }
    Helper.addLike(commentData.comment.id);
    setLikes((prevLikes) => prevLikes + 1);
    return setLiked(true);
  };

  if (commentData.user.role === "expert") {
    setAnswered(true);
  }

  return (
    <div className={styles["comment"]}>
      <If condition={commentData.user.role === "expert"}>
        <div className={styles["answer-mark"]}>
          Antwort
        </div>
      </If>
      <div className={styles["card"]}>
        <CommentAudio commentData={commentData} panelTitle={panelTitle} />
        <CommentStatement commentData={commentData} />
        <CommentLike
          commentData={commentData}
          likes={likes}
          liked={liked}
          handleLikeClick={handleLikeClick}
        />
      </div>
    </div>
  );
};

export default Comment;
