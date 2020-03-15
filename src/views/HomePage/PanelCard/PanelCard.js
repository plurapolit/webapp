import React from "react";
import { Link } from "react-router-dom";
import { If, Then, Else } from "react-if";

import { useTransition } from "../../../helper/CustomHookHelper";
import { Spinner } from "../../../components/Loader/Loader";
import PanelApi from "../../../api/PanelApi";
import ExpertsList from "../ExpertsList/ExpertsList";
import playerImage from "../../../assets/images/play.svg";
import styles from "./PanelCard.module.scss";
import { useStoreContext } from "../../../contexts/StoreContext/StoreContext";
import { usePlayerContext } from "../../../contexts/PlayerContext/PlayerContext";
import { createAudioTrackListFromExpertStatements } from "../../../helper/AudioTrackHelper";

const PanelCard = ({
  title, imageUrl, color, shortTitle, slug, experts,
}) => {
  const customStyle = {
    "--url": `url(${imageUrl})`,
    "--color": `${color}`,
  };
  const { getPanelIdBySlug } = useStoreContext();
  const { setAudioTrackList } = usePlayerContext();
  const [startTransition, isPending] = useTransition();

  const playAllAudioTracks = async () => {
    const panelId = getPanelIdBySlug(slug);
    const panel = await startTransition(() => PanelApi.fetchPanelById(panelId));
    const audios = createAudioTrackListFromExpertStatements(panel.expert_statements, shortTitle);
    setAudioTrackList(audios);
  };

  return (
    <div className={styles["panel-card"]}>
      <div className={styles["playAllButton"]} onClick={playAllAudioTracks}>
        <If condition={isPending}>
          <Then>
            <Spinner />
          </Then>
          <Else>
            <img src={playerImage} alt="play" />
          </Else>
        </If>
      </div>
      <Link to={`${slug}`}>
        <div className={styles["question-banner"]} style={customStyle} data-test="panel-card">
          <div className={styles["image-wrapper"]}>
            <div className={styles["shortTitle"]}>{shortTitle}</div>
          </div>
          <div className={styles["detail-wrapper"]}>
            <div className={styles["title"]}>{title}</div>
            <div className={styles["experts-wrapper"]}>
              <ExpertsList experts={experts} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PanelCard;
