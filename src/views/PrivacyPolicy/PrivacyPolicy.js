import React from 'react';
import styles from './PrivacyPolicy.module.scss';

import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';

const PrivacyPolicy = () => (
  <div className={styles["wrapper"]}>
    <ContentWrapper>
      <p><strong>DATENSCHUTZERKLÄRUNG</strong></p>
      <br />
      <p>Nachfolgend informieren wir Sie, welche Daten wir von Ihnen erfassen und wie wir diese Daten weiterverarbeiten bzw. speichern. Bitte zögern Sie bei Fragen nicht, uns zu kontaktieren.</p>
      <br />
      <p><strong>I. Name und Kontaktdaten Verantwortlicher und Datenschutzbeauftragter</strong></p>
      <p>
1.
        <span>Diese Datenschutz-Information gilt für die Datenverarbeitung durch:</span>
      </p>
      <p>
PluraPolit gUG &#40;i.G.&#41;
        <br />
Paul-Nevermann-Platz 5
        <br />
22765 Hamburg
      </p>
      <p><a href="mailto:datenschutz@plurapolit.de">datenschutz@plurapolit.de</a></p>
      <p>Registergericht: Handelsregister Amtsgericht Hamburg HRB &#40;folgt&#41;</p>
      <p>Geschäftsführer: Caspar Ibel, Lucas Lamby</p>
      <br />

      <p><strong>2. Datenschutzbeauftragter</strong></p>
      <p>
Der Datenschutzbeauftragte der PluraPolit gUG ist Robin Zuscke. Er ist unter
        <a href="mailto:robin@plurapolit.de"> robin@plurapolit.de</a>
        {' '}
für Anfragen erreichbar.
      </p>
      <br />

      <p><strong>II. Art und Weise der Verarbeitung personenbezogener Daten sowie Art und Zweck von deren Verwendung</strong></p>
      <p>Der Übersichtlichkeit halber haben wir die  Informationen zur Datenerfassung und Datenverarbeitung zunächst danach aufgeteilt, wie der Kontakt mit Ihnen zustande kommt, ob über unsere Website oder anderweitig, z.B. per Telefon oder per E-Mail. </p>
      <br />
      <p><strong>1. Besuch der Website</strong></p>
      <p><strong>a&#41; Aufruf der Website</strong></p>
      <p>
Beim Aufrufen unserer Website
        <a href="http://www.plurapolit.de">www.plurapolit.de</a>
        {' '}
werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
      </p>
      <ul className={styles["list"]}>
        <li>Anonymisierte IP-Adresse des anfragenden Endgerätes,</li>
        <li>Datum und Uhrzeit des Zugriffs,</li>
        <li>Name und URL der abgerufenen Datei,</li>
        <li>Website, von der aus der Zugriff erfolgt &#40;Referrer-URL&#41;,</li>
        <li>verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers</li>
      </ul>
      <p>Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:</p>
      <ul className={styles["list"]}>
        <li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,</li>
        <li>Gewährleistung einer komfortablen Nutzung unserer Website,</li>
        <li>Auswertung der Systemsicherheit und -stabilität </li>
        <li>Analyse zur Verbesserung unserer Dienste</li>
      </ul>
      <p>Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus oben aufgelisteten Zwecken zur Datenerhebung. In diesem Zusammenhang verwenden wir die erhobenen Daten nicht zu dem Zweck, Rückschlüsse auf Ihre Person zu ziehen.</p>
      <br />
      <p><strong>b&#41; Einstellen von Beiträgen auf unserer Website</strong></p>
      <p>Sie können auf unserer Webseite Beiträge einstellen bzw. von uns einstellen lassen.</p>
      <p>aa&#41; Expert*innenbeiträge</p>
      <p>Sofern Sie einen sog. Expert*innenbeitrag von uns auf unserer Website einstellen lassen, erfassen, veröffentlichen und speichern wir dabei folgende personenbezogenen Daten von Ihnen:</p>
      <ol className={styles["list"]}>
        <li>Name</li>
        <li>Partei/Arbeitgeber</li>
        <li>Funktion</li>
        <li>E-Mail Adresse</li>
        <li>Links zu Social-Media Kanälen</li>
        <li>Foto</li>
      </ol>
      <p>Ihre personenbezogenen Daten werden dabei in eine Eingabemaske eingegeben und an uns übermittelt und gespeichert.</p>
      <p>Die Erhebung dieser Daten erfolgt,</p>
      <ul className={styles["list"]}>
        <li>um Sie als eine/n unserer Expert*innen identifizieren zu können;</li>
        <li>für eigene Analysen und Statistikzwecke</li>
      </ul>
      <p>Die Datenverarbeitung erfolgt auf Ihre Vereinbarung mit uns hin und ist nach Art. 6 Abs. 1 S. 1 lit. b DSGVO zu den genannten Zwecken für die Veröffentlichung Ihres Expert*innenbeitrages notwendig. </p>
      <p>bb&#41; User*innen</p>
      <p>Sofern Sie als sog. User*in einen Beitrag kommentieren oder einen sonstigen eigenen Beitrag auf unserer Website einstellen, erfassen und speichern wir folgende personenbezogene Daten von Ihnen</p>
      <ol className={styles["list"]}>
        <li>Vor- und Nachname</li>
        <li>Zugehörigkeit zu Altersgruppe &#40;zB 18-29, 30-39, ...&#41;</li>
        <li>E-Mail Adresse</li>
        <li>Telefonnummer</li>
      </ol>
      <p>Wir veröffentlichen lediglich Ihren ersten Vornamen sowie den ersten Buchstaben Ihres Nachnamens sowie die gewählte Altersgruppe. E-Mail Adresse und Telefonnummer werden dabei nicht veröffentlicht. </p>
      <ol>
      <br />
        <li><strong>Datenverarbeitung mittel COOKIES</strong></li>
      </ol>
      <p>Wir setzen auf unserer Website Cookies ein. Hierbei handelt es sich allerdings ausschließlich um zustimmungsfreie Cookies, und zwar folgende Cookies:</p>
      <br />
      <p><strong>aa&#41; Notwendige Cookies – ohne Einwilligung einsetzbar</strong></p>
      <p>Für einige Funktionalitäten unserer Website sind Cookies notwendig, so z.B. für das Speichern des Passwortes und der personalisierten Einstellungen auf unserer Website. Hier ist der Einsatz gem. Art. 6 Abs. 1 S. 1 lit. b DSGVO gerechtfertigt, um die von Ihnen gewünschte Funktion ordnungsgemäß erfüllen zu können. Es bedarf zum Einsatz dieser Cookies nicht Ihrer Einwilligung.</p>
      <br />
      <p><strong>bb&#41; Analysetool von Matomo &#40;ehemals PIWIK&#41;</strong></p>
      <p>
Wir nutzen auf unserer Website das Open-Source-Software-Tool Matomo &#40;ehemals PIWIK&#41; zur Analyse Ihres Surfverhaltens. Dabei wird ein Cookie auf Ihrem Rechner gesetzt. Die Software läuft ausschließlich auf den Servern unserer Webseite. Eine Speicherung Ihrer personenbezogenen Daten findet nicht statt, da infolge Aktivierung der Anonymisierung lediglich zwei Bytes Ihrer IP-Adresse gespeichert werden. Eine Zuordnung der gekürzten IP-Adresse zum aufrufenden Rechner ist dadurch nicht mehr möglich Eine Weitergabe der Daten an Dritte erfolgt ebenfalls nicht. Nähere Informationen erhalten Sie unter
        <a href="https://matomo.org/docs/privacy/">https://matomo.org/docs/privacy/</a>
      </p>
      <p>Der Einsatz von Matomo mit der entsprechenden Verarbeitung Ihrer personenbezogenen Daten ist gem. Art. 6 Abs. 1S. 1 lit. f DSGVO gerechtfertigt, da wir ein berechtigtes Interesse an der Auswertung der Nutzung unserer Website zum Zwecke der Verbesserung haben. Aufgrund der Anonymisierung wird Ihrem Interesse am Schutz Ihrer personenbezogenen Daten hinreichend Rechnung getragen, so dass keine überwiegenden Interessen von Ihrer Seite entgegenstehen</p>
      <p>
Sie können die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten &#40;inkl. Ihrer IP-Adresse&#41; sowie die Verarbeitung dieser Daten durch Google auch dadurch verhindern, indem Sie ein Browser-Add-on herunterladen und installieren
&#40;
        <a href="https://tools.google.com/dlpage/gaoptout?hl=de">https://tools.google.com/dlpage/gaoptout?hl=de</a>
&#41;.
      </p>
      <p>Wir weisen auf Ihr Widerspruchsrecht nach Art. 21 DSGVO &#40;s.u. Ziffer V.2.&#41; hin.</p>
      <br />
      <p><strong>cc&#41; Deaktivieren von Cookies</strong></p>
      <p>Die meisten Browser akzeptieren Cookies automatisch. Sie können Ihren Browser jedoch so konfigurieren, dass keine Cookies auf Ihrem Computer gespeichert werden oder stets ein Hinweis erscheint, bevor ein neuer Cookie angelegt wird. Die vollständige Deaktivierung von Cookies kann jedoch dazu führen, dass Sie nicht alle Funktionen unserer Website nutzen können.</p>
      <p>
Außerdem können Sie Cookies von Drittanbietern deaktivieren, indem sie die Deaktivierungsseite der Netzwerkwerbeinitiative &#40;Network Advertising Initiative&#41; unter
        <a href="https://www.networkadvertising.org/choices/">https://www.networkadvertising.org/choices/</a>
        {' '}
aufrufen und die dort genannten weiterführenden Information zum Opt-Out umsetzen.
      </p>
      <p><strong>dd&#41; Dauer der Speicherung/Löschung von Cookies</strong></p>
      <br />
      <p>Die Cookies werden mit Löschung des Caches endgültig entfernt</p>
      <br />
      <p><strong>2. Kontaktaufnahme auf anderem Weg &#40;z.B. Tel., E-Mail&#41;</strong></p>
      <p>Sofern Sie per E-Mail, per Telefon oder sonst persönlich mit uns in Kontakt zu treten, erfassen wir grundsätzlich Ihren Vor- und Nachnamen, sowie Ihre Kontaktdaten &#40;z.B. E-Mail, Telefon&#41;. Im Übrigen richtet sich die Datenverarbeitung nach dem Inhalt Ihrer Anfrage.</p>
      <p>Rechtsgrundlage für die Verarbeitung ist je nach Inhalt der Anfrage Art. 6 Abs. 1 S. 1 lit. b DSGVO bzw. Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus dem Zweck der Beantwortung Ihrer Anfrage. </p>
      <br />
      <p><strong>3. Daten von Ansprechpartnern unserer Expert*innen</strong></p>
      <p>Wir speichern ggfs. die Kontaktdaten &#40;Name, Vorname, Adresse, Telefonnummer, E-Mail-Adresse, Firmen-/Parteizugehörigkeit&#41; von Ansprechpartnern unserer Expert*innen zum Zweck der vereinfachten Kontaktaufnahme im Rahmen der Akquisition bzw. Realisierung von Expert*innenbeiträgen. Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 S.1 lit. f DSGVO. </p>
      <br />
      <p><strong>III. Speicherdauer - Löschfristen</strong></p>
      <p>Die Daten werden gelöscht, sobald sie für den Zweck ihrer Verarbeitung nicht mehr erforderlich sind. Im Einzelnen:</p>
      <p>Sofern Sie unsere Website besucht haben, ohne einen Beitrag eingestellt zu haben, werden Ihre gem. oben unter Ziffer II.1.a&#41; erfassten Daten nach einem Monat gelöscht.</p>
      <p>Die im Rahmen der Einstellung von Expert*innenbeiträgen von uns gem. Ziffer II.1.b&#41; erhobenen personenbezogenen Daten werden bis zum Ablauf von 5 Jahren gespeichert und danach gelöscht, es sei denn, dass wir nach Artikel 6 Abs. 1 S. 1 lit. c DSGVO aufgrund von steuer- und handelsrechtlichen Aufbewahrungs- und Dokumentationspflichten &#40;aus HGB, StGB oder AO&#41; zu einer längeren Speicherung verpflichtet sind oder Sie in eine darüber hinausgehende Speicherung nach Art. 6 Abs. 1 S. 1 lit. a DSGVO eingewilligt haben.</p>
      <p>Die für die im Rahmen einer sonstigen Anfrage &#40;s.o. II.2&#41; von uns erhobenen personenbezogenen Daten werden nach Erledigung der von Ihnen gestellten Anfrage spätestens nach 12 Monaten automatisch gelöscht.</p>
      <p>Die Speicherdauer bzw. Löschfristen bei dem Einsatz von Cookies und Trackingtools finden Sie oben bei den jeweiligen Informationen unter Ziffer II.1. c&#41;.</p>
      <br />
      <p><strong>IV. Weitergabe von Daten</strong></p>
      <p><strong>1. Berechtigung zur Weitergabe</strong></p>
      <p>Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden &#40;Ziffern 2. ff.&#41; aufgeführten Zwecken findet nicht statt.</p>
      <p>Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:</p>
      <ul className={styles["list"]}>
        <li>dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist,</li>
        <li>für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht und/oder</li>
        <li>die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben.</li>
      </ul>
      <p>Zu anderen Zwecken geben wir Ihre persönlichen Daten nur weiter, wenn Sie dazu Ihre ausdrückliche Einwilligung erteilt haben, Art. 6 Abs. 1 S. 1 lit. a DSGVO.</p>
      <p>
      <br />
        <strong>2. </strong>
        <strong> </strong>
        <strong>Empfänger, allgemein</strong>
      </p>
      <p>Eine Weitergabe Ihrer personenbezogenen Daten von uns an Dritte erfolgt vor allem an Auftragsverarbeiter, an die wir zur Durchführung der Geschäftsbeziehung mit Ihnen personenbezogene Daten übermitteln oder denen wir den Zugriff auf Ihre bei uns gespeicherten Daten gestatten. Im Einzelnen: Unterstützung/Wartung von EDV-IT-Anwendungen; Archivierung; Datenvernichtung; Marketing; Webseitenmanagement.</p>
      <p>
Wir greifen zwecks Hostings und Verteilung der Webseiteninhalte auf die Produkte „S3“ und „Cloudfront“ von Amazon Web Services, Inc., 410 Terry Avenue North, Seattle WA 98109, USA, &#40;„AWS“&#41; zurück, der unsere Daten im Auftrag verarbeitet. Das Hosting erfolgt dabei ausschließlich im AWS-Rechenzentrum in Frankfurt a.M. AWS ist ferner Privacy-Shield-zertifiziert und garantiert damit, auch außerhalb des europäischen Wirtschaftsraums die personenbezogenen Daten entsprechend europäischer Datenschutzgesetze zu verarbeiten &#40;
        <a href="https://www.privacyshield.gov/participant?id=a2zt0000000TOWQAA4&amp;status=Active">https://www.privacyshield.gov/participant?id=a2zt0000000TOWQAA4&amp;status=Active</a>
&#41;.
      </p>
      <p>In den Fällen der Weitergabe Ihrer personenbezogenen Daten an Dritte beschränkt sich der Umfang der übermittelten Daten jedoch auf das erforderliche Minimum.</p>
      <p>Die Weitergabe der Daten ist im Rahmen des Betriebs unserer Website notwendig und daher durch unser berechtigtes Interesse an einer funktionsfähigen Website gerechtfertigt  gem. Art. 6 Abs. 1 S. 1 lit. f DSGVO. Aufgrund der Anonymisierung der IP-Adressdaten steht der Speicherung der Daten auf einem Server der AWS GmbH nach hinreichender Prüfung der Verhältnismäßigkeit kein vorrangiges Interesse der User*innen und Expert*innen entgegen.</p>
      <p>
      <br />
        <strong>3. </strong>
        <strong> </strong>
        <strong>Weitergabe von Daten aufgrund des Medienprivilegs</strong>
      </p>
      <p>Wir leiten Beiträge zudem an journalistisch tätige Unternehmen im Sinne von § 57 Rundfunkstaatsvertrag &#40;RStV&#41; weiter, um eine Veröffentlichung auch in anderen Medien zu bewirken. Die Weitergabe erfolgt aufgrund unseres berechtigten Interesses daran, an der öffentlichen Meinungsbildung teilzunehmen und eine möglichst große Verbreitung der auf unserer Website geführten Diskussion zu erreichen. Dieses ist vom sog. Medienprivileg, Art. 85 DSGVO, Art. 5 GG geschütztes berechtigtes Interesse gem. Art. 6. Abs. 1 S. 1 lit. f DSGVO, die Weitergabe der Daten mithin gem. Art. 6 Abs. 1 S. 1 lit. f DSGVO gerechtfertigt.</p>
      <p>Sofern wir in diesem Zusammenhang Fotos von Personen des öffentlichen Interesses an Dritte weitergeben, ergibt sich die Berechtigung hierzu aus Art. 6 Abs. 1 S. 1 lit. f und Art. 85 DSGVO in Verbindung mit § 23 Abs. 1 Nr. 1 KunstUrhG. </p>
      <br />
      <p><strong>V. Betroffenenrechte</strong></p>
      <p>Ihnen stehen hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten folgende Rechte zu:</p>
      <br />
      <p><strong>1. Allgemeine Rechte </strong></p>
      <p>Sie haben das Recht:</p>
      <ul className={styles["list"]}>
        <li>gemäß Art. 15 DSGVO unentgeltliche Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen. Insbesondere können Sie Auskunft über die Verarbeitungszwecke, die Kategorie der personenbezogenen Daten, die Kategorien von Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch, das Bestehen eines Beschwerderechts, die Herkunft ihrer Daten, sofern diese nicht bei uns erhoben wurden, sowie über das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und ggf. aussagekräftigen Informationen zu deren Einzelheiten verlangen;</li>
        <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;</li>
        <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist;</li>
        <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen, soweit die Richtigkeit der Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig ist, Sie aber deren Löschung ablehnen und wir die Daten nicht mehr benötigen, Sie jedoch diese zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen oder Sie gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung eingelegt haben;</li>
        <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen;</li>
        <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen. Dies hat zur Folge, dass wir die Datenverarbeitung, die auf dieser Einwilligung beruhte, für die Zukunft nicht mehr fortführen dürfen und</li>
        <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren. In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres Firmensitzes wenden.</li>
      </ul>
      <br />
      <p><strong>2. Widerspruchsrecht</strong></p>
      <p>Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben. </p>
      <p>
Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch machen, genügt eine E-Mail an datenschutz@plurapolit.de
        <strong>.</strong>
      </p>
      <br />
      <p><strong>VI. Datensicherheit</strong></p>
      <p>Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren &#40;Secure Socket Layer&#41; in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. In der Regel handelt es sich dabei um eine 256 Bit Verschlüsselung. Falls Ihr Browser keine 256-Bit Verschlüsselung unterstützt, greifen wir stattdessen auf 128-Bit v3 Technologie zurück.</p>
      <p>Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
      <p>Wenn die SSL Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p>
      <p>Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.</p>
      <br />
      <p><strong>VII. Aktualität und Änderung dieser Datenschutzerklärung</strong></p>
      <p>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Dezember 2019.</p>
      <p>
Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website unter
        <a href="http://www.plurapolit.de/datenschutz">www.plurapolit.de/datenschutz</a>
        {' '}
von Ihnen abgerufen und ausgedruckt werden.
      </p>
    </ContentWrapper>
  </div>
);

export default PrivacyPolicy;
