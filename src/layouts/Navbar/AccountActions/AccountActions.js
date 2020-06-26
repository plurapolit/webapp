import React from "react";
import Button, { ButtonStyle } from "../../../components/Button/Button";
import SignOutButton from "../../../components/SignOutButton/SignOutButton";

const createSignInButton = (customStyle) => (
  <li className={customStyle.item}>
    <Button buttonStyle={ButtonStyle.SECONDARY} to="/sign_in/" dataTest="sign_in">
      Anmelden
    </Button>
  </li>
);

const createSignUpButton = (customStyle) => (
  <li className={customStyle.item}>
    <Button buttonStyle={ButtonStyle.CTA} to="/sign_up/">
      Registrieren
    </Button>
  </li>
);

const createSignOutButton = (customStyle) => (
  <li className={customStyle.item}>
    <SignOutButton />
  </li>
);

export default function AccountActions({ user, customStyle }) {
  if (user) {
    return createSignOutButton(customStyle);
  }
  return (
    <>
      {createSignInButton(customStyle)}
      {createSignUpButton(customStyle)}
    </>
  );
}
