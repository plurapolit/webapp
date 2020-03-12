import QueueItem from "../QueueItem/QueueItem";

const Queue = (function queueObject() {
  const createQueue = () => {
    const value = [];
    const currentAudioTrackId = 0;
    let lastTrackId;

    function addTrack(track) {
      const item = QueueItem.create(track);
      const lastTrack = this.findTrack(this.lastTrackId);
      if (lastTrack) lastTrack.setNext(item.id);
      this.value.push(item);
      this.lastTrackId = item.id;
    }

    function setAudioTrack(track) {
      const newTrack = QueueItem.create(track);
      const currentTrack = this.currentAudioTrack();
      if (currentTrack && currentTrack.next) {
        this.removeFollowingTracks(currentTrack.next);
      }
      if (currentTrack) {
        currentTrack.setNext(newTrack.id);
        newTrack.setPrev(currentTrack.id);
      }
      this.value.push(newTrack);
      this.lastTrackId = newTrack.id;
      if (currentTrack) return this.nextAudioTrack();
      return newTrack;
    }

    function setAudioTrackList(trackList) {
      const firstTrack = trackList.shift();
      this.setAudioTrack(firstTrack);
      trackList.forEach((track) => this.addTrack(track));
    }

    function removeFollowingTracks(removedTrackId) {
      const removedTrack = this.findTrack(removedTrackId);
      const nextId = removedTrack.next;
      this.value = this.value.filter((track) => track.id !== removedTrackId);
      if (nextId) this.removeFollowingTracks(nextId);
    }

    function currentAudioTrack(audioTrackId = this.currentAudioTrackId) {
      return this.findTrack(audioTrackId);
    }

    function findTrack(id) {
      return this.value.find((item) => item.id === id);
    }

    function nextAudioTrack() {
      const currentTrack = this.currentAudioTrack();
      currentTrack.played = true;
      if (currentTrack.next === false) return false;
      const nextId = currentTrack.next;
      this.currentAudioTrackId = nextId;
      return this.currentAudioTrack(nextId);
    }

    function prev() {
      const currentTrack = this.currentTrack();
      if (currentTrack.prev === false) return false;
      const prevId = currentTrack.prev;
      this.currentAudioTrackId = prevId;
      return this.currentTrack(prevId);
    }

    function playedTracks() {
      return this.value.filter((track) => track.played === true);
    }

    return {
      value,
      lastTrackId,
      currentAudioTrackId,
      currentAudioTrack,
      nextAudioTrack,
      prev,
      playedTracks,
      addTrack,
      findTrack,
      setAudioTrack,
      removeFollowingTracks,
      setAudioTrackList,
    };
  };

  return {
    create: () => createQueue(),
  };
});

export default Queue();
