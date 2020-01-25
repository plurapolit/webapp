import React from 'react';

import ContentWrapper from '../ContentWrapper/ContentWrapper';
import Text from '../Text/Text';
import Button from '../Button/Button';

import styles from './MoreSection.module.scss';

const MoreSection = () => {
  return (
    <section className={styles["more-section"]}>
      <ContentWrapper>
        <div className={styles["line"]}/>
        <Text
          headline="More to come. Short Preview. Stay tuned. Newsletter signup"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Deserunt, ipsam, nihil minus laudantium voluptates, ab soluta voluptas sequi 
          ad vero repellat dolor temporibus cum quos labore error assumenda. Suscipit, aperiam!
        </Text>
        <Button label="Tell me more" customClass="u-margin-top--medium" />
      </ContentWrapper>
    </section>
  );
}

export default MoreSection;