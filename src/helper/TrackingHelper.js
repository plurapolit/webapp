import {
  useState, useContext,
} from "react";
import { StoreContext } from "../contexts/StoreContext/StoreContext";
import UserAudioTrackingApi from "../api/UserAudioTrackingApi";

const Tracking = () => {
  const TIME_BETWEEN_TRACKING_UPDATES_IN_SECONDS = 10;

  const { user } = useContext(StoreContext);
  const userId = user ? user.id : null;

  const [trackingId, setTrackingId] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [listenEvents, setListenEvents] = useState(-1);

  const updateTracking = async () => {
    if (trackingId) {
      await UserAudioTrackingApi.put(trackingId, currentTime, listenEvents);
    }
  };

  const resetTracking = () => {
    setListenEvents(-1);
    setTrackingId(null);
    setCurrentTime(0);
  };

  const createNewTrackingEntry = async (statementId) => {
    await updateTracking();
    resetTracking();
    const res = await UserAudioTrackingApi.post(userId, statementId, 0, 0);
    setTrackingId(res.id);
  };

  const trackWhilePlaying = (player) => {
    setCurrentTime(player.current.audio.currentTime);
    setListenEvents(listenEvents + 1);
    if (listenEvents % TIME_BETWEEN_TRACKING_UPDATES_IN_SECONDS === 0) {
      updateTracking();
    }
  };

  return {
    createNewTrackingEntry,
    trackWhilePlaying,
    updateTracking,
  };
};

export default Tracking();
