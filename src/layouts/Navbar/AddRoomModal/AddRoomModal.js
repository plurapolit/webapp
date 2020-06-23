import React from "react";

import Button from "../../../components/Button/Button";
import { getDataFromEvent } from "../../../helper/FormHelper";
import styles from "./AddRoomModal.module.scss";
import Notification from "../../../helper/NotificationHelper";

// TODO: Add tests

export default function createAddRoomModal(onSubmit, closeModal, user) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = getDataFromEvent(event);
    onSubmit(user.id, data).then(() => {
      Notification.success(
        "Du wurdest erfolgreich in den privaten Raum eingetragen",
      );
      closeModal();
    });
  };
  return (
    <div className={styles["join-room"]}>
      <div className={styles["heading"]}>
        Gib den Code für die Einladung ein:
      </div>
      <form
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="inviteCode"
          placeholder="Code für die Einladung"
          required
        />
        <div>
          <Button type="submit">Eintragen</Button>
        </div>
      </form>
    </div>
  );
};