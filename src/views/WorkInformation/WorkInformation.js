import React from "react";
import styles from "./WorkInformation.module.scss";

import Hyphen from "../../helper/HyphenHelper";
import ContentWrapper from "../../layouts/ContentWrapper/ContentWrapper";

const WorkInformation = () => (
  <div className={styles["wrapper"]}>
    <ContentWrapper>
      <Hyphen>
        <h1>FEHLINFORMATIONEN & WIE WIR ARBEITEN</h1>
      </Hyphen>
      <br />
      <p>
        <strong>Wie entsteht eigentlich eine Panelfrage bei PluraPolit?</strong>
      </p>
      <br />
      <p>
        Jedes unserer Teammitglieder verfolgt das tagespolitische Geschehen aktiv und überlegt
        sich auf Grundlage dessen und ihrer/seiner persönlichen Interessen, was sie
        oder ihn als Panel interessieren würde, aber auch andere junge Menschen begeistern könnte.
      </p>
      <br />
      <p>
        Nachdem wir ein paar Fragen zusammengetragen haben, entscheiden wir im Team, welche Fragen
        interessant, aktuell und für junge Leute relevant sind und verteilen diese.
        Dabei ist uns wichtig, dass jede-/r Spaß an der Frage hat, die sie oder er bearbeitet.
      </p>
      <br />
      <p>
        Wenn die Frage steht, überlegen wir uns eine interessante Besetzung. Im Sinne des
        Pluralismus kommen bei uns Vertreter/-innen aller im Bundestag vertretenen Parteien zu Wort.
        Das heißt konkret: Die Linke, SPD, Bündnis 90/Die Grünen, CDU/CSU, FDP; AfD.
        Zusätzlich bemühen wir uns immer drei Expert-/innen zu gewinnen, die die Frage einordnen
        und auf Grundlage aktueller wissenschaftlicher und fachlicher Erkenntnisse beziehungsweise
        Erfahrungen, beantworten.
      </p>
      <br />
      <p>
        Die neun Personen, die wir nach verschiedenen Kriterien, wie z. B. Bezug zur Zielgruppe
        und Thema,
        Reden im Bundestag zu der Thematik oder Mitgliedschaft in entsprechenden Ausschüssen,
        auswählen, schicken uns dann 2- bzw. 1-minütige Audiostatements.
      </p>
      <br />
      <p>
        Es gibt für diese Statements nur die Vorgabe, dass sie 2 bzw. 1 Minute lang sein dürfen
        und die Frage
        zielgruppengerecht beantwortet werden soll. Wenn wir die Statements bekommen,
        überprüfen wir die
        Qualität und laden sie dann auf unserer Plattform hoch.
      </p>
      <br />
      <p>
        <strong>
          Jetzt wird’s wichtig!!
        </strong>
        &nbsp; Wir überprüfen die Statements nicht auf Wahrheitsgehalt.
        Wenn ihr euch also
        Statements auf PluraPolit anhört, dann seid kritisch und vertraut nicht blind,
        dem was man euch
        erzählt. In Zeiten von Falschnachrichten bzw. Fehlinformationen tauchen,
        auch in den Statements auf
        unserer Plattform, immer wieder irreführende Behauptungen auf. Wir können das in den
        Audiostatements nicht ändern, aber es ist wichtig, dass man sich bewusst macht,
        dass auch in den
        Audiostatements falsche oder irreführende Informationen auftauchen können.
      </p>
      <br />
      <p>
        <strong>Wie also mit PluraPolit umgehen?</strong>
      </p>
      <br />
      <p>
        Zunächst mal geben wir euch den Tipp, euch tatsächlich alle Statements ganz anzuhören.
        Manchmal
        relativieren sich Dinge oder Behauptungen schon allein dadurch, dass jemand anderes
        die gleiche
        Statistik oder Zahl anders einordnet. Wir empfehlen euch ebenfalls Faktenchecks zu
        dem jeweiligen
        Thema zu suchen und sich diese sorgfältig durchzulesen. Viele Faktenchecks
        gibt es bei
        <a className={styles["link"]} href="https://correctiv.org/" target="_blank" rel="noopener noreferrer"> correctiv</a>
        , hier findet ihr Faktenchecks zu den verschiedensten Themen.
      </p>
      <br />
      <p>
        Zu guter Letzt: Sprecht mit anderen Leuten über das Thema,
        dadurch bekommt ihr andere Meinungen zu hören und vielleicht auch neue
        Informationen zu dem Thema, über das ihr euch informiert.
      </p>
    </ContentWrapper>
  </div>
);

export default WorkInformation;
