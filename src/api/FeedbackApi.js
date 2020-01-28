import { fetchData, Parameter } from './APIUtils';

const FeedbackApi = () => {
  const URL = process.env.REACT_APP_ROOT_URL;

  const send = (email, description) => {
    const body = {
      feedback: {
        description,
        email,
      }
    }
    const parameters = Parameter.post(body);
    return fetchData(`${URL}/feedbacks/`, parameters);
  }

  return {
    send
  };
};

export default FeedbackApi();
