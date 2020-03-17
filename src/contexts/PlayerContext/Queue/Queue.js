import hash from "object-hash";
import QueueItem from "../QueueItem/QueueItem";

const Queue = () => {
  let queue;
  let currentAudioTrackId;
  let lastAudioTrackId;

  const findTrack = (id) => queue.value.find((item) => item.id === id);

  const hasAudioTrack = (track) => {
    const id = hash(track);
    const foundTrack = findTrack(id);
    if (foundTrack) return true;
    return false;
  };

  const currentAudioTrack = () => findTrack(currentAudioTrackId);

  const pushTrackToQueue = (track) => {
    queue.value.push(track);
    lastAudioTrackId = track.id;
  };

  const addAudioTrack = (track) => {
    const newTrack = QueueItem.create(track);
    const lastTrack = findTrack(lastAudioTrackId);
    if (lastTrack) lastTrack.setNext(newTrack);
    pushTrackToQueue(newTrack);
    return newTrack;
  };

  const setCurrentAudioTrack = ({ track, id, isStart = false }) => {
    if (track) currentAudioTrackId = hash(track);
    if (id) currentAudioTrackId = id;
    if (isStart) {
      const currentTrack = currentAudioTrack();
      const prevTrack = findTrack(currentTrack.prev);
      currentTrack.disconectPrevItem(prevTrack);
    }
  };

  const nextAudioTrack = () => {
    const currentTrack = currentAudioTrack();
    currentTrack.played = true;
    if (!currentTrack.hasNext()) return undefined;
    const nextTrack = findTrack(currentTrack.next);
    setCurrentAudioTrack({ id: nextTrack.id });
    return nextTrack;
  };

  const prevAudioTrack = () => {
    const currentTrack = currentAudioTrack();
    if (!currentTrack.hasPrev()) return undefined;
    const prevId = currentTrack.prev;
    currentAudioTrackId = prevId;
    return currentAudioTrack({ id: prevId });
  };

  const setAudioTrackList = (trackList) => {
    const audioTrackList = trackList.map((track) => addAudioTrack(track));
    const firstAudioTrack = audioTrackList[0];
    const lastAudioTrack = audioTrackList[audioTrackList.length - 1];
    lastAudioTrack.setNext(firstAudioTrack);
  };

  const playedAudioTracks = () => queue.value.filter((track) => track.played === true);

  const queueObj = {
    value: [],
    currentAudioTrack,
    setCurrentAudioTrack,
    nextAudioTrack,
    prevAudioTrack,
    playedAudioTracks,
    setAudioTrackList,
    hasAudioTrack,
  };

  return {
    create: () => { queue = queueObj; return queue; },
  };
};

export default Queue();
