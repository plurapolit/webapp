import QueueItem from "../QueueItem/QueueItem";

const Queue = () => {
  let queue;
  let currentAudioTrackId = 0;
  let lastAudioTrackId;

  const findTrack = (id) => queue.value.find((item) => item.id === id);

  const removeFollowingTracks = (removedTrackId) => {
    const removedTrack = findTrack(removedTrackId);
    const nextId = removedTrack.next;
    queue.value = queue.value.filter((track) => track.id !== removedTrackId);
    if (nextId) removeFollowingTracks(nextId);
  };

  const currentAudioTrack = (audioTrackId = currentAudioTrackId) => findTrack(audioTrackId);

  const pushTrackToQueue = (track) => {
    queue.value.push(track);
    lastAudioTrackId = track.id;
  };

  const addAudioTrack = (track) => {
    const newTrack = QueueItem.create(track);
    const lastTrack = findTrack(lastAudioTrackId);
    if (lastTrack) lastTrack.setNext(newTrack.id);
    pushTrackToQueue(newTrack);
  };

  const nextAudioTrack = () => {
    const currentTrack = currentAudioTrack();
    currentTrack.played = true;
    if (currentTrack.next === false) return false;
    const nextId = currentTrack.next;
    currentAudioTrackId = nextId;
    return currentAudioTrack(nextId);
  };

  const setAudioTrack = (track) => {
    const newTrack = QueueItem.create(track);
    const currentTrack = currentAudioTrack();
    if (currentTrack && currentTrack.next) {
      removeFollowingTracks(currentTrack.next);
    }
    if (currentTrack) {
      currentTrack.setNext(newTrack.id);
      newTrack.setPrev(currentTrack.id);
    }
    pushTrackToQueue(newTrack);
    if (currentTrack) return nextAudioTrack();
    return newTrack;
  };

  const setAudioTrackList = (trackList) => {
    const firstTrack = trackList.shift();
    setAudioTrack(firstTrack);
    trackList.forEach((track) => addAudioTrack(track));
  };

  const prevAudioTrack = () => {
    const currentTrack = currentAudioTrack();
    if (currentTrack.prev === false) return false;
    const prevId = currentTrack.prev;
    currentAudioTrackId = prevId;
    return currentTrack(prevId);
  };

  const playedAudioTracks = () => queue.value.filter((track) => track.played === true);

  const queueObj = {
    value: [],
    currentAudioTrack,
    nextAudioTrack,
    prevAudioTrack,
    playedAudioTracks,
    addAudioTrack,
    setAudioTrack,
    setAudioTrackList,
  };

  return {
    create: () => { queue = queueObj; return queue; },
  };
};

export default Queue();
