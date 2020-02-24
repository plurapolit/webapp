import LikeApi from "../../../api/LikeApi";

const CommentHelper = () => {
  const addLike = async (commentId) => LikeApi.post(commentId);
  const removeLike = async (commentId) => LikeApi.delete(commentId);

  return {
    addLike,
    removeLike,
  };
};

export default CommentHelper();
