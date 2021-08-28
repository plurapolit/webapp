import React from "react";
import styles from "./ContactBanner.module.scss";

const BANNER_PANELS = [182, 197, 198, 181, 196, 199];

const ContactBanner = ({ panelId }) => {
  if (BANNER_PANELS.includes(panelId)) {
    return (
      <div className={styles.banner}>
        Für diesen Memo-Mat wurden alle Parteien auf der Hamburger Landesliste zur
        Bundestagswahl angefragt. Manche Parteien haben auf unsere Anfragen gar nicht
        oder zu spät reagiert.
      </div>
    );
  }

  return (
    <></>
  );
};

export default ContactBanner;
