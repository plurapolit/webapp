import React, { Component } from "react";

import UserAudioTrackingApi from "../api/UserAudioTrackingApi";

const withTracking = (WrappedComponent) => {
  const TIME_BETWEEN_TRACKING_UPDATES_IN_SECONDS = 10;

  const initialState = {
    trackingId: null,
    currentTime: 0,
    listenEvents: -1,
  };

  class PlayerWithTracking extends Component {
    constructor(props) {
      super(props);
      this.state = initialState;
      this.updateTracking = this.updateTracking.bind(this);
      this.createNewTrackingEntry = this.createNewTrackingEntry.bind(this);
      this.trackWhilePlaying = this.trackWhilePlaying.bind(this);
    }

    async updateTracking() {
      const { trackingId, currentTime, listenEvents } = this.state;
      if (trackingId) {
        await UserAudioTrackingApi.put(trackingId, currentTime, listenEvents);
      }
    }

    resetTracking() {
      const newState = initialState;
      this.setState(newState);
    }

    async createNewTrackingEntry(statementId, user) {
      const userId = user ? user.id : null;
      await this.updateTracking();
      this.resetTracking();
      const res = await UserAudioTrackingApi.post(userId, statementId, 0, 0);
      this.setState((prevState) => ({
        ...prevState,
        trackingId: res.id,
      }));
    }

    trackWhilePlaying(player) {
      const { listenEvents } = this.state;
      this.setState((prevState) => ({
        ...prevState,
        currentTime: player.current.audio.currentTime,
        listenEvents: prevState.listenEvents + 1,
      }));
      if (listenEvents % TIME_BETWEEN_TRACKING_UPDATES_IN_SECONDS === 0) {
        this.updateTracking();
      }
    }

    render() {
      return (
        <WrappedComponent
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...this.props}
          createNewTrackingEntry={this.createNewTrackingEntry}
          trackWhilePlaying={this.trackWhilePlaying}
          updateTracking={this.updateTracking}
        />
      );
    }
  }

  return PlayerWithTracking;
};

export default withTracking;
