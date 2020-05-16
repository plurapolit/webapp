import React from "react";
import { If } from "react-if";
import Img from "react-image";
import LazyLoad from "react-lazyload";

import defaultProfileImageUrl from "../../../../assets/images/default-profile.svg";
import styles from "./StatementHeader.module.scss";
import { ImgixApiUrlParameters } from "../../../../helper/ImageDeliveryHelper";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import createDropdownHelper from "./dropdownHelper";
import { useStoreContext } from "../../../../contexts/StoreContext/StoreContext";
import { ClickTracking } from "../../../../api/TrackingApi";

const StatementHeader = ({
  expert,
  setShowTranscription,
  showTranscription,
}) => {
  const { getUserId } = useStoreContext();
  const createTrackableFunc = (func, event, information) => {
    const trackableFunc = () => {
      ClickTracking.post(getUserId(), expert.statement.id, event, information);
      func();
    };
    return trackableFunc;
  };
  const DropdownHelper = createDropdownHelper(expert, createTrackableFunc);

  const defaultProfileImage = (
    <img
      src={defaultProfileImageUrl}
      alt="profile"
      className={styles["image"]}
    />
  );

  const avatar = () => {
    const image = (
      <LazyLoad offset={300} once>
        <Img
          src={`${expert.user_avatar}${ImgixApiUrlParameters(80)}`}
          alt={expert.user.full_name}
          className={styles["image"]}
          loader={defaultProfileImage}
        />
      </LazyLoad>
    );

    if (expert.user.website_link) {
      return (
        <a href={expert.user.website_link} target="_blank" rel="noopener noreferrer">
          {image}
        </a>
      );
    }
    return image;
  };

  const weblinks = DropdownHelper.getWeblinks();
  const weblinkAndTranscription = DropdownHelper.addTranscription(
    weblinks, showTranscription, setShowTranscription,
  );
  const dropdownItems = DropdownHelper.addShareLink(weblinkAndTranscription);

  return (
    <div className={styles["header"]}>
      {avatar()}
      <div className={styles["user-info"]}>
        <h3 className={styles["name"]}>
          {expert.user.full_name}
        </h3>
        <div className={styles["organisation"]}>
          {expert.organisation.name}
        </div>
        <div className={styles["biography"]}>
          {expert.user.biography}
        </div>
      </div>
      <If condition={dropdownItems.length > 0}>
        <Dropdown items={dropdownItems} style={{ marginRight: ".5rem", marginTop: ".5rem" }} />
      </If>
    </div>
  );
};

export default StatementHeader;
