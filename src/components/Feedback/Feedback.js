import React from 'react';

import Button from '../Button/Button';
import { getDataFromEvent, setNotification } from '../../helper/helper';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import FeedbackApi from '../../api/FeedbackApi';

import styles from './Feedback.module.scss';

const Feedback = () => {
  const handleSubmit = (event) => {
    const data = getDataFromEvent(event);
    FeedbackApi.send(data.email, data.text)
      .then(() => {
        setNotification({ message: 'Vielen Dank für Ihre E-Mail.', type: 'success' });
      });
  };

  return (
    <section className={styles["feedback"]}>
      <ContentWrapper>
        <div className={`${styles["heading"]} u-margin-bottom--medium`}>
          Lorem
        </div>
        <form className={styles["form"]} onSubmit={(event) => handleSubmit(event)}>
          <input className={styles["email"]} type="email" name="email" placeholder="E-Mail" required />
          <textarea className={styles["textarea"]} type="text" name="text" placeholder="Ihr Feedback ..." required />
          <div>
            <Button type="submit">Senden</Button>
          </div>
        </form>
      </ContentWrapper>
    </section>
  );
}

export default Feedback;
