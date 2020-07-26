import React from "react";

import ContentWrapper from "../../../layouts/ContentWrapper/ContentWrapper";
import Button from "../../../components/Button/Button";
import Text from "../../../components/Text/Text";
import "./SubscribeToPrivateRoomUpdates.module.scss";
import { getDataFromEvent } from "../../../helper/FormHelper";
import FeedbackApi from "../../../api/FeedbackApi";
import Notification from "../../../helper/NotificationHelper";

const createInputField = () => <input type="email" name="email" placeholder="Ihre E-Mail" />;

const createButton = () => (
  <Button type="submit" style={{ marginLeft: "2rem" }}>Abschicken</Button>
);

const createHandleSubmit = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = getDataFromEvent(event);
    FeedbackApi.send(data.email, "Subscribe for private room feature").then(() => {
      Notification.success("Wir haben ihre E-Mailadresse erhalten");
    });
  };
  return handleSubmit;
};

const createFormWithInput = (button, handleSubmit) => {
  const inputField = createInputField();
  return (
    <form action="submit" onSubmit={handleSubmit}>
      {inputField}
      {button}
    </form>
  );
};

const createHeadline = () => (
  <Text headline="Beleib auf dem neusten Stand">
    Gibt deine E-Mail an und wir kontaktieren dich, sobald es Neuigkeiten gibt.
  </Text>
);

export default function SubscribeToPrivateRoomUpdates() {
  const headline = createHeadline();
  const saveButton = createButton();
  const handleSubmit = createHandleSubmit();
  const form = createFormWithInput(saveButton, handleSubmit);
  return (
    <section>
      <ContentWrapper>
        {headline}
        {form}
      </ContentWrapper>
    </section>
  );
}
