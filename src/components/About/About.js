import React from 'react';

import ContentWrapper from '../ContentWrapper/ContentWrapper';
import Text from '../Text/Text';
import styles from './About.module.scss';

const About = () => (
  <section className={styles["about"]}>
    <ContentWrapper>
      <Text
        headline="Auf PluraPolit kannst du dich politisch informieren und mitdiskutieren."
      >
        Zu jedem Thema findest du bei
        uns die Meinungen von Politiker/-innen aller Parteien,
        die im Bundestag sitzen sowie von drei weiteren
        Expert/-innen. Alles in kurzen Audio-Statements.
        <br />
        Diskutier durch eigene Sprachnotizen mit!
      </Text>
    </ContentWrapper>
  </section>
);

export default About;
