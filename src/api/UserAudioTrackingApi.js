import { fetchResponse, Parameter } from "./APIUtils";

const UserAudioTrackingApi = () => {
  const post = async (userId, statementId, currentPositionInSeconds, playTimeInSeconds) => {
    const postUrl = `${process.env.REACT_APP_ROOT_URL}/user_audio_trackings`;
    const body = {
      user_id: userId,
      statement_id: statementId,
      current_position_in_seconds: currentPositionInSeconds,
      playtime_in_seconds: playTimeInSeconds,
    };

    const parameters = Parameter.post(body);
    const res = await fetchResponse(postUrl, parameters);
    if (res.ok) {
      const json = await res.json();
      return json;
    }
    const errorObj = await res.json();
    throw errorObj;
  };

  const put = async (trackingId, currentPositionInSeconds, playTimeInSeconds) => {
    const putUrl = `${process.env.REACT_APP_ROOT_URL}/user_audio_trackings/${trackingId}`;
    const body = {
      current_position_in_seconds: currentPositionInSeconds,
      playtime_in_seconds: playTimeInSeconds,
    };

    const parameters = Parameter.put(body);
    const res = await fetchResponse(putUrl, parameters);
    if (res.ok) {
      return true;
    }
    const errorObj = await res.json();
    throw errorObj;
  };

  return {
    post,
    put,
  };
};

export default UserAudioTrackingApi();
