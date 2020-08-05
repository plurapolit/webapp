import React, { useRef } from "react";

import Text from "../Text/Text";
import ContentWrapper from "../../layouts/ContentWrapper/ContentWrapper";
import styles from "./Assignment.module.scss";
import HomeHeader from "../../views/HomePage/HomeHeader/HomeHeader";
import SubscribeToPrivateRoomUpdates from "../../views/HomePage/SubscribeToPrivateRoomUpdates/SubscribeToPrivateRoomUpdates";
import Button from "../Button/Button";
import { getDataFromEvent } from "../../helper/FormHelper";
import Notification from "../../helper/NotificationHelper";
import FeedbackApi from "../../api/FeedbackApi";

export default function Assignment() {
  return (
    <>
      <HomeHeader />
      <div className={styles["wrapper"]}>
        <ContentWrapper>
          <Text headline="Danke für Ihre Zeit">
            <p>
              Die geschlossenen Klassenräume sind eine Funktion,
              die sich noch in der Planung befindet.
              Wir möchten die Umsetzung nicht abhängig von Geld und eigenen Ressourcen machen,
              sondern davon inwieweit das Angebot von Lehrer/-innen genutzt werden würde.
              Wenn Sie die Funktion also spannend finden, dann hinterlassen Sie uns
              als Zeichen doch bitte eine E-Mail Adresse im nachfolgenden Feld.
              Auf dieser werden wir Sie mit Updates (nur) zu dem Schulangebot kontaktieren.
              Falls Sie weitere Anmerkungen haben, können Sie diesen unten
              in dem Feedback-Feld angeben.
            </p>
            <p>
              Alternativ kannst du uns auch unter:
              <a href="mailto:caspar@plurapolit.de"> caspar@plurapolit.de </a>
              erreichen.
              Wir freuen uns natürlich auch, wenn Sie die Demo an
              weitere Lehrer/-innen weiterleiten.
            </p>
            <p>
              Für mehr Informationen über aktuelle Themen können Sie auch unsere offizielle Seite
              <a href="http://www.plurapolit.de" target="_blank" rel="noopener noreferrer"> www.plurapolit.de </a>
              besuchen.
            </p>
            <p>
              Danke für Ihre Zeit und schöne Grüße
            </p>
            <p>
              Das PluraPolit Team
            </p>
          </Text>
        </ContentWrapper>
      </div>
      <SubscribeToPrivateRoomUpdates />
      <Feedback />
    </>
  );
}

const Feedback = () => {
  const emailInput = useRef(undefined);
  const feedbackInput = useRef(undefined);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = getDataFromEvent(event);
    FeedbackApi.send(data.email, data.text).then(() => {
      Notification.success(
        "Danke für dein Feedback! Du hilfst uns sehr PluraPolit besser zu machen.",
      );
      emailInput.current.value = "";
      feedbackInput.current.value = "";
    });
  };

  return (
    <section className={styles["feedback"]}>
      <ContentWrapper>
        <div className={`${styles["heading"]} u-margin-bottom--medium`}>
          Feedback
        </div>
        <Text>
          Was gefällt Ihnen nicht? Was können wir noch besser machen?
        </Text>
        <form
          className={styles["form"]}
          onSubmit={(event) => handleSubmit(event)}
        >
          <textarea
            className={styles["textarea"]}
            type="text"
            name="text"
            placeholder="Ihr Feedback ..."
            ref={feedbackInput}
            required
          />
          <div>
            <Button type="submit">Senden</Button>
          </div>
        </form>
      </ContentWrapper>
    </section>
  );
};
