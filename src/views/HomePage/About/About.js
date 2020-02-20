import React from "react";

import ContentWrapper from "../../../layouts/ContentWrapper/ContentWrapper";
import Text from "../../../components/Text/Text";
import styles from "./About.module.scss";

const About = () => (
  <section className={styles["about"]}>
    <ContentWrapper>
      <Text headline="Auf PluraPolit kannst du dich politisch informieren und mitdiskutieren.">
        <div className={styles["about-description"]}>
          Zu jedem Thema findest du bei uns die Meinungen von Politiker/-innen
          aller Parteien, die im Bundestag sitzen, sowie von drei weiteren
          Expert/-innen. Alles in kurzen Audio-Statements. Alles ohne Werbung
          und kostenlos, denn wir sind gemeinnützig.
          <br />
          Diskutier durch eigene Sprachnotizen mit!
        </div>
      </Text>
    </ContentWrapper>
  </section>
);

export default About;
