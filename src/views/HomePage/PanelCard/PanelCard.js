import React from "react";
import { Link } from "react-router-dom";
import { If, Then, Else } from "react-if";

import Loader from "../../../components/Loader/Loader";
import PanelApi from "../../../api/PanelApi";
import ExpertsList from "../ExpertsList/ExpertsList";
import playerImage from "../../../assets/images/play.svg";
import styles from "./PanelCard.module.scss";
import { useTransition } from "../../../helper/CustomHookHelper";
import { useStoreContext } from "../../../contexts/StoreContext/StoreContext";
import { usePlayerContext } from "../../../contexts/PlayerContext/PlayerContext";
import { createAudioTrackListFromExpertStatements } from "../../../helper/AudioTrackHelper";
import { ImgixApiUrlParameters } from "../../../helper/ImageDeliveryHelper";

const PanelCard = ({
  title, imageUrl, color, shortTitle, slug, experts,
}) => {
  const customStyle = {
    "--url": `url(${imageUrl}${ImgixApiUrlParameters(400)}`,
    "--color": `${color}`,
  };
  const { getPanelIdBySlug } = useStoreContext();
  const { queue, startPlayer } = usePlayerContext();
  const [startTransition, isPending] = useTransition();

  const playAllAudioTracks = async () => {
    const panelId = getPanelIdBySlug(slug);
    const panel = await startTransition(() => PanelApi.fetchPanelById(panelId));
    const audios = createAudioTrackListFromExpertStatements(panel.expert_statements, shortTitle);
    if (!queue.hasAudioTrack(audios[0])) queue.setAudioTrackList(audios);
    queue.setStartAudioTrack(audios[0]);
    startPlayer();
  };

  return (
    <div className={styles["panel-card"]}>
      <div className={styles["playAllButton"]} onClick={playAllAudioTracks}>
        <If condition={isPending}>
          <Then>
            <Loader size={35} borderWidth="0.3rem" color="#fff" />
          </Then>
          <Else>
            <img src={playerImage} alt="play" />
          </Else>
        </If>
      </div>
      <Link to={`${slug}`}>
      {/* <div onClick={() => console.log("parend")}> */}
        <div className={styles["question-banner"]} style={customStyle} data-test="panel-card">
          <div className={styles["image-wrapper"]}>
            <div className={styles["title"]}>{title}</div>
          </div>
          <div className={styles["detail-wrapper"]}>
            <div className={styles["experts-wrapper"]}>
              <ExpertsList experts={experts} panelShortTitle={shortTitle} slug={slug} />
            </div>
          </div>
        </div>
      {/* </div> */}
      </Link>
    </div>
  );
};

export default PanelCard;
