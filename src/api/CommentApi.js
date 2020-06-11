import { fetchResponse, Parameter } from "./APIUtils";
import JwtApi from "./JwtApi";

const CommentApi = () => {
  const getUrl = (statementId) => `${process.env.REACT_APP_ROOT_URL}/statements/${statementId}/comments`;

  const getComments = async (statementId) => {
    const jwt = JwtApi.get();
    const headers = Parameter.get(jwt);
    return fetch(
      `${process.env.REACT_APP_ROOT_URL}/statements/${statementId}/comments/`,
      headers,
    );
  };

  const postAudio = async (statementId, quote, fileLink, duration) => {
    const body = {
      comment: {
        quote,
      },
      audio_file: {
        file_link: fileLink,
        duration_seconds: duration,
      },
    };
    const parameters = Parameter.post(body, JwtApi.get());
    const res = await fetchResponse(getUrl(statementId), parameters);
    if (res.ok) {
      return true;
    }
    return false;
  };

  const postText = async (statementId, textRecord, inviteCode = 123456) => {
    const body = {
      text_record: {
        content: textRecord,
      },
      room_id: inviteCode,
    };
    const parameters = Parameter.post(body, JwtApi.get());
    const res = await fetchResponse(getUrl(statementId), parameters);
    if (res.ok) {
      return true;
    }
    return false;
  };

  return {
    postAudio,
    postText,
    getComments,
  };
};

export default CommentApi();
