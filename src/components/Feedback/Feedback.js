import React, { useState } from 'react';
import { store as notificationStore } from 'react-notifications-component';

import Button from '../Button/Button';
import { getDataFromEvent } from '../../helper/helper';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import FeedbackApi from '../../api/FeedbackApi';

import styles from './Feedback.module.scss';

const Feedback = () => {
  const notifi = () => {
    notificationStore.addNotification({
      message: "Vielen Dank für Ihr Feedback.",
      type: "success",
      insert: "top",
      container: "top-left",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "zoomOut"],
      dismiss: {
        duration: 3000,
        onScreen: false,
        pauseOnHover: true,
        showIcon: true,
      },
    });
  };


  const handleSubmit = async (event) => {
    const data = getDataFromEvent(event);
    console.log('data', data);
    const sended = await FeedbackApi.send(data.email, data.text);
    if (sended) {
      notifi();
    }
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
