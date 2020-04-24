import React from "react";
import { If } from "react-if";

import Button, { ButtonStyle } from "../../../../components/Button/Button";
import { useStoreContext } from "../../../../contexts/StoreContext/StoreContext";
import { useModalContext } from "../../../../contexts/ModalContext/ModalContext";
import SignInComponent from "../../../../components/SignInComponent/SignInComponent";

import styles from "./Commenting.module.scss";

const Commenting = ({
  commenting,
  setCommenting,
}) => {
  const { user } = useStoreContext();
  const modal = useModalContext();

  const handleCommenting = () => {
    if (!user) {
      modal.showContent(
        <SignInComponent routeBack={
          () => {
            modal.closeModal();
            setCommenting(true);
          }
        }
        />,
      );
    }
    if (user) setCommenting(true);
  };

  return (
    <div className={styles["comment"]}>
      <If condition={!commenting}>
        <div className={styles["button--comment"]}>
          <Button
            buttonStyle={ButtonStyle.NONE}
            onClick={handleCommenting}
          >
            Antworten
          </Button>
        </div>
      </If>
    </div>
  );
};

export default Commenting;
