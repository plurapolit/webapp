import React from 'react';

import ContentWrapper from '../ContentWrapper/ContentWrapper';
import Text from '../Text/Text';
import styles from './About.module.scss';

const About = () => (
  <section className={styles["about"]}>
    <ContentWrapper>
      <Text
        headline="PluraPolit hilft Dir Dich politish zu informieren und mitzudiskutieren"
      >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Deserunt, ipsam, nihil minus laudantium voluptates, ab soluta voluptas sequi
          ad vero repellat dolor temporibus cum quos labore error assumenda. Suscipit, aperiam!
      </Text>
    </ContentWrapper>
  </section>
);

export default About;
