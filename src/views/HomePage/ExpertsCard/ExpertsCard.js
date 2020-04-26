import React, { useCallback } from "react";
import LazyLoad from "react-lazyload";
import { If } from "react-if";
import Img from "react-image";

import { ImgixApiUrlParameters } from "../../../helper/ImageDeliveryHelper";
import { useTransition } from "../../../helper/CustomHookHelper";
import { useStoreContext } from "../../../contexts/StoreContext/StoreContext";
import { usePlayerContext } from "../../../contexts/PlayerContext/PlayerContext";
import { createAudioTrackListFromExpertStatements } from "../../../helper/AudioTrackHelper";
import PanelApi from "../../../api/PanelApi";

import defaultProfileImageUrl from "../../../assets/images/default-profile.svg";
import styles from "./ExpertsCard.module.scss";

const getAudioByAuthorFromArray = (array, author) => {
  const foundAudio = array.find((audio) => audio.author === author);
  if (foundAudio) return foundAudio;
  return array[0];
};

const ExpertsCard = ({
  experts,
  slug,
  panelTitle,
}) => {
  const { getPanelIdBySlug } = useStoreContext();
  const { queue, startPlayer, currentStatement } = usePlayerContext();
  const [startTransition, isPending] = useTransition();

  const defaultProfileImage = (
    <img
      src={defaultProfileImageUrl}
      alt="experte"
      className={styles["speaker-image"]}
    />
  );

  const thisStatementIsPlaying = useCallback(() => {
    if (currentStatement) {
      const isAuthor = currentStatement.content.author === experts.full_name;
      const isPanel = currentStatement.content.panelTitle === panelTitle;
      return isAuthor && isPanel;
    }
    return false;
  }, [currentStatement, experts, panelTitle]);

  const playAudioTracks = async (event) => {
    event.preventDefault();
    const panelId = getPanelIdBySlug(slug);
    const panel = await startTransition(() => PanelApi.fetchPanelById(panelId));
    const audios = createAudioTrackListFromExpertStatements(panel.expert_statements, panelTitle);
    const startAudio = getAudioByAuthorFromArray(audios, experts.full_name);
    if (!queue.hasAudioTrack(startAudio)) queue.setAudioTrackList(audios);
    queue.setStartAudioTrack(startAudio, { notIntro: true });
    startPlayer();
  };

  let imgStyle = `${styles["speaker-image"]}`;
  if (thisStatementIsPlaying()) imgStyle += ` ${styles["speaker-image--border"]}`;

  return (
    <div className={styles["speaker-image-wrapper"]} onClick={playAudioTracks}>
      <LazyLoad offset={800} once>
        <Img
          src={`${experts.avatar}${ImgixApiUrlParameters(70)}`}
          className={imgStyle}
          alt={experts.full_name}
          loader={defaultProfileImage}
        />
        <Img
          alt={experts.organisation_name}
          src={`${experts.organisation_avatar}${ImgixApiUrlParameters(50)}`}
          className={styles["organisation-logo"]}
        />
      </LazyLoad>
    </div>
  );
};

export default ExpertsCard;
