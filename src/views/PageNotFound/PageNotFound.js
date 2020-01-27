import React from 'react';
import { Link } from 'react-router-dom';

import styles from './PageNotFound.module.scss';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';

const PageNotFound = () => (
  <>
    <div className={styles["page-not-found"]}>
      <ContentWrapper>
        <Text>
          Auf dieser Webseite diskutiert heute leider keiner,
          aber besuch doch eine unserer anderen Seiten.
        </Text>
        <Link to="/">
          <Button>Startseite</Button>
        </Link>
      </ContentWrapper>
    </div>
  </>
);

export default PageNotFound;
