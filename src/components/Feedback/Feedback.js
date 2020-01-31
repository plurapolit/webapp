import React from 'react';

import Button from '../Button/Button';
import { getDataFromEvent } from '../../helper/helper';
import Notification from '../../helper/Notification';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import FeedbackApi from '../../api/FeedbackApi';

import styles from './Feedback.module.scss';

const Feedback = () => {
  const handleSubmit = (event) => {
    const data = getDataFromEvent(event);
    FeedbackApi.send(data.email, data.text)
      .then(() => {
        Notification.success('Danke für dein Feedback! Du hilfst uns sehr PluraPolit besser zu machen.');
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
