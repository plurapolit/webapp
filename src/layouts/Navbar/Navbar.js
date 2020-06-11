import React from "react";
import { Link } from "react-router-dom";

import { useStoreContext } from "../../contexts/StoreContext/StoreContext";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Notification from "../../helper/NotificationHelper";
import styles from "./Navbar.module.scss";
import SignOutButton from "../../components/SignOutButton/SignOutButton";
import lockImage from "../../assets/images/p-lock-outlined.svg";
import Button, { ButtonStyle } from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useModalContext } from "../../contexts/ModalContext/ModalContext";
import { getDataFromEvent } from "../../helper/FormHelper";

const createItem = ({ text, onClick }) => (
  {
    text,
    onClick,
  }
);

const createPublicRoom = (onClick) => ({
  text: "öffentlich",
  onClick: () => onClick(undefined),
});

const createAddRoom = (onClick) => ({
  text: "Raum beitreten",
  onClick: () => onClick("beigetreten"),
});

const createDropdownItems = (list, onClick, onAddRoomClick) => {
  if (list) {
    const privateRoomItems = list.map(({ room }) => {
      const dropdownItem = createItem({ text: room.name, onClick: () => onClick(room.invideCode) });
      return dropdownItem;
    });
    const publicRoomItem = createPublicRoom(onClick);
    const addRoomItem = createAddRoom(onAddRoomClick);
    const dropdownItems = [publicRoomItem, ...privateRoomItems, addRoomItem];
    return dropdownItems;
  }
  return undefined;
};

const createClosedRoomIcon = (dropdownItems) => (
  <Dropdown items={dropdownItems}>
    <img src={lockImage} alt="geschlossener Raum" className={styles["lock-icon"]} />
  </Dropdown>
);

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

const createAccountActions = (user, customStyle) => {
  if (user) {
    return createSignOutButton(customStyle);
  }
  return (
    <>
      {createSignInButton(customStyle)}
      {createSignUpButton(customStyle)}
    </>
  );
};

const createAddRoomModal = (onSubmit, closeModal, user) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = getDataFromEvent(event);
    onSubmit(user, data).then(() => {
      Notification.success(
        "Du wurdest erfolgreich in den privaten Raum eingetragen",
      );
      closeModal();
    });
  };
  return (
    <div className={styles["join-room"]}>
      <div className={styles["heading"]}>
        Gib den Invide-Code für den Raum ein:
      </div>
      <form
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="invideCode"
          placeholder="Invide-Code"
          required
        />
        <div>
          <Button type="submit">Eintragen</Button>
        </div>
      </form>
    </div>
  );
};

const createRoomElement = (name) => <div className={styles["room-name"]}>{name}</div>;

export default function Navbar() {
  const {
    user,
    getAssignedRooms,
    setActiveRoomByInvideCode,
    joinRoom,
    getClassRoomName,
  } = useStoreContext();
  const { showContent, closeModal } = useModalContext();
  const addRoomModal = createAddRoomModal(joinRoom, closeModal, user);
  const openModal = () => showContent(addRoomModal);
  const customStyle = {
    nav: styles["navbar"],
    item: styles["item"],
  };

  // openModal();
  const assignedRooms = getAssignedRooms();
  const dropdownItems = createDropdownItems(assignedRooms, setActiveRoomByInvideCode, openModal);
  const closedRoomIcon = createClosedRoomIcon(dropdownItems);
  const buttons = createAccountActions(user, customStyle);
  const activeRoomName = createRoomElement(getClassRoomName());

  return (
    <nav className={customStyle.nav}>
      <ul className={styles["container"]}>
        <Link to="/">
          <h1 className={styles["logo-text"]}>PluraPolit</h1>
        </Link>
        <div className={styles["container_items"]}>
          <li className={customStyle.item}>
            <Link to="/2020-wir-uber-uns">Über uns</Link>
          </li>
          {buttons}
          {user
          && (
            <>
              <li className={customStyle.item}>
                {activeRoomName}
              </li>
              <li className={customStyle.item}>
                {closedRoomIcon}
              </li>
            </>
          )}
        </div>
      </ul>
      <BurgerMenu isTop={false} />
    </nav>
  );
}
