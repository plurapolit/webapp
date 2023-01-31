import React from "react";
import ContentWrapper from "../../../layouts/ContentWrapper/ContentWrapper";
import styles from "./GoodBye.module.scss";

const GoodBye = () => (
  <header className={styles["home-header"]}>
    <ContentWrapper>
      <div className={styles["heading"]}>
        Liebe Fans und Follower von PluraPolit, wir müssen die Seite leider zum
        12.02.2023 vom Netz nehmen. Als Studis haben wir PluraPolit ehrenamtlich
        seit 2020 betrieben. Durch den Einstieg ins Arbeitsleben kommen wir hier
        leider an unsere Grenzen. Vielen Dank für den Support, bei Fragen oder
        Anregungen meldet euch gerne bei kontakt@plurapolit.de
      </div>
    </ContentWrapper>
  </header>
);

export default GoodBye;
