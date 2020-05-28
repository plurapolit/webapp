import React, { useState } from "react";
import { If, Else, Then } from "react-if";

import JwtApi from "../../../api/JwtApi";
import CommentApi from "../../../api/CommentApi";
import Notification from "../../../helper/NotificationHelper";
import Helper from "./CommentHelper";
import { useModalContext } from "../../../contexts/ModalContext/ModalContext";
import SignInComponent from "../../../components/SignInComponent/SignInComponent";
import CommentAudio from "./CommentAudio/CommentAudio";
import CommentText from "./CommentText/CommentText";
import CommentStatement from "./CommentStatement/CommentStatement";
import CommentLike from "./CommentLike/CommentLike";
import Commenting from "./Commenting/Commenting";
import CommentEditor from "../CommentEditor/CommentEditor";

import styles from "./Comment.module.scss";

const Comment = ({
  commentData,
  panelTitle,
  statementId,
}) => {
  const [commenting, setCommenting] = useState(false);
  const [liked, setLiked] = useState(commentData.likes.liked_by_current_user);
  const [likes, setLikes] = useState(commentData.likes.total_likes);
  const modal = useModalContext();

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
    <div className={styles["comment"]} data-test="comment">
      <If condition={commentData.user.role === "expert"}>
        <div className={styles["answer-mark"]}>
          Antwort
        </div>
      </If>
      <div className={styles["card"]}>
        <If condition={!!commentData.audio_file}>
          <Then>
            <CommentAudio commentData={commentData} panelTitle={panelTitle} />
          </Then>
          <Else>
            <CommentText commentData={commentData} />
          </Else>
        </If>
        <CommentStatement commentData={commentData} />
        <Commenting commenting={commenting} setCommenting={setCommenting} />
        <CommentLike
          commentData={commentData}
          likes={likes}
          liked={liked}
          handleLikeClick={handleLikeClick}
        />
      </div>
      <div>
        <If condition={commenting}>
          <CommentEditor
            setCommenting={setCommenting}
            userFullName={commentData.user.full_name}
            onSend={saveComment}
            isReplyToComment
          />
        </If>
      </div>
    </div>
  );
};

export default Comment;
