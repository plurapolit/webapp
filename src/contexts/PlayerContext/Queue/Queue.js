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

  const resetStartAndNotIntroFlag = () => {
    const prevStartTrackList = queue.value.filter((t) => t.firstInQueue === true);
    // eslint-disable-next-line no-param-reassign
    if (prevStartTrackList) prevStartTrackList.forEach((t) => { t.firstInQueue = false; });
    const prevNotIntroTrackList = queue.value.filter((t) => t.notIntro === true);
    // eslint-disable-next-line no-param-reassign
    if (prevNotIntroTrackList) prevNotIntroTrackList.forEach((t) => { t.notIntro = false; });
  };

  const setStartAudioTrack = (track, { notIntro = false } = {}) => {
    resetStartAndNotIntroFlag();
    if (track) currentAudioTrackId = hash(track);
    const startAudioTrack = findTrack(currentAudioTrackId);
    startAudioTrack.firstInQueue = true;
    if (notIntro) startAudioTrack.notIntro = true;
  };

  const nextAudioTrack = () => {
    const currentTrack = currentAudioTrack();
    currentTrack.played = true;
    if (!currentTrack.hasNext()) return undefined;
    const nextTrack = findTrack(currentTrack.next);
    if (nextTrack.isFirstInQueue()) return undefined;
    currentAudioTrackId = nextTrack.id;
    return nextTrack;
  };

  const prevAudioTrack = () => {
    const currentTrack = currentAudioTrack();
    if (!currentTrack.hasPrev()) return undefined;
    if (currentTrack.isFirstInQueue()) return undefined;
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
    setStartAudioTrack,
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
