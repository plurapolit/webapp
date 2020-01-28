import { fetchResponse, Parameter } from './APIUtils';

const FeedbackApi = () => {
  const URL = process.env.REACT_APP_ROOT_URL;

  const send = async (email, description) => {
    const body = {
      feedback: {
        description,
        email,
      },
    };
    const parameters = Parameter.post(body);
    const res = await fetchResponse(`${URL}/feedbacks/`, parameters);
    if (!res.ok) {
      const errorObj = await res.json();
      throw errorObj;
    }
    return true;
  };

  return {
    send,
  };
};

export default FeedbackApi();
