import React from 'react';
import styles from './SiteNotice.module.scss';

import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';

const SiteNotice = () => (
  <div className={styles["wrapper"]}>
    <ContentWrapper>
      <br />
      <h2><strong>Impressum</strong></h2>
      <br />
      <p>Angaben gemäß §5 TMG:</p>
      <br />
      <p>
        Plura gUG (i.G.)
        <br />
        Paul-Nevermann-Platz 5
        <br />
        22765 Hamburg
      </p>
      <br />
      <p><a href="mailto:kontakt@plurapolit.de">kontakt@plurapolit.de</a></p>
      <br />
      <p>Registergericht: Handelsregister Amtsgericht Hamburg HRB (folgt)</p>
      <br />
      <p>Geschäftsführer: Caspar Ibel, Lucas Lamby</p>
      <h4><span>Verantwortliche i.S.d. § 55 Abs. 2 RStV:</span></h4>
      <br />
      <p>Caspar Ibel (Produkt), Lucas Lamby (Redaktion), Paul-Nevermann-Platz 5, 22765 Hamburg</p>
      <br />
      <p>
Plattform der EU-Kommission zur Online-Streitbeilegung:
        <a href="https://ec.europa.eu/odr"> https://ec.europa.eu/odr</a>
      </p>
      <br />
      <p>Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.</p>
    </ContentWrapper>
  </div>
);

export default SiteNotice;