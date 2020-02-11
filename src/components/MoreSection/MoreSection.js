import React from "react";

import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Text from "../Text/Text";
import Button from "../Button/Button";

import styles from "./MoreSection.module.scss";

const MoreSection = () => (
  <section className={styles["more-section"]}>
    <ContentWrapper>
      <div className={`${styles["heading"]} u-margin-bottom--medium`}>
        Werde Teil von PluraPolit
      </div>
      <Text>Diskutier bei uns mit und gib deiner Meinung eine Stimme!</Text>
      <Button customClass="u-margin-top--medium" to="/sign_up/">
        Jetzt kostenlos anmelden
      </Button>
    </ContentWrapper>
  </section>
);

export default MoreSection;
