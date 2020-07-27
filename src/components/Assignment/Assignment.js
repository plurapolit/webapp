import React from "react";

import Text from "../Text/Text";
import ContentWrapper from "../../layouts/ContentWrapper/ContentWrapper";
import styles from "./Assignment.module.scss";
import HomeHeader from "../../views/HomePage/HomeHeader/HomeHeader";
import SubscribeToPrivateRoomUpdates from "../../views/HomePage/SubscribeToPrivateRoomUpdates/SubscribeToPrivateRoomUpdates";

const Assignment = () => (
  <>
    <HomeHeader />
    <div className={styles["wrapper"]}>
      <ContentWrapper>
        <Text headline="Danke für Ihre Zeit">
          <p>
            Die geschlossenen Klassenräume sind ein Feature, das sich noch in der Planung befindet.
            Wir möchten die Umsetzung nicht abhängig von Geld und eigenen Ressourcen machen,
            sondern inwieweit das Angebot von Lehrer/-innen genutzt werden würde.
            Wenn du das Feature also spannend findest,
            dann hinterlasse uns als Zeichen doch bitte eine E-Mail Adresse im nachfolgenden Feld.
            Auf dieser werden wir dich mit Updates (nur) zu dem Schulangebot kontaktieren.
            Falls du weitere Anmerkungen hast, hinterlasse diese bitte in dem unteren Feld.
            Alternativ kannst du uns auch unter:
            <a href="mailto:kontakt@plurapolit.de"> kontakt@plurapolit.de </a>
            erreichen.
            Wir freuen uns natürlich auch, wenn du die Demo an weitere Lehrer/-innen weiterleitest.
          </p>
          <p>
            Für mehr Informationen über aktuelle Themen kannst du auch unsere offizielle Seite
            <a href="http://www.plurapolit.de" target="_blank" rel="noopener noreferrer"> www.plurapolit.de </a>
            besuchen.
          </p>
          <p>
            Danke für deine Zeit und schöne Grüße
          </p>
          <p>
            Das PluraPolit Team
          </p>
        </Text>
      </ContentWrapper>
    </div>
    <SubscribeToPrivateRoomUpdates />
  </>
);

export default Assignment;
