import UserAudioTrackingApi from "../api/UserAudioTrackingApi";

const Tracking = (function TrackingObj() {
  const TIME_BETWEEN_TRACKING_UPDATES_IN_SECONDS = 10;
  let instance;

  async function createTracking(statementId, user) {
    const userId = user ? user.id : null;
    const { id: trackingId } = await UserAudioTrackingApi.post(userId, statementId, 0, 0);

    async function updateTracking(
      trackId = this.trackingId,
      currentTime = this.currentTime,
      listenEvents = this.listenEvents,
    ) {
      await UserAudioTrackingApi.put(trackId, currentTime, listenEvents);
    }

    function trackWhilePlaying(currentTime) {
      this.currentTime = currentTime;
      this.listenEvents += 1;
      if (this.listenEvents % TIME_BETWEEN_TRACKING_UPDATES_IN_SECONDS === 0) {
        this.updateTracking(this.trackingId, this.currentTime, this.listenEvents);
      }
    }

    return {
      userId,
      trackingId,
      currentTime: 0,
      listenEvents: -1,
      updateTracking,
      trackWhilePlaying,
    };
  }
  const create = async (statementId, user) => {
    if (instance) {
      instance.updateTracking();
    }
    instance = await createTracking(statementId, user);
    return instance;
  };

  return {
    create,
  };
});

export default Tracking();
