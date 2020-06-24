import React from "react";
import { Link } from "react-router-dom";

import { useStoreContext } from "../../contexts/StoreContext/StoreContext";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import styles from "./Navbar.module.scss";
import lockImage from "../../assets/images/p-lock.svg";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useModalContext } from "../../contexts/ModalContext/ModalContext";
import AddRoomModal from "./AddRoomModal/AddRoomModal";
import Highlight from "../../components/HIghlight/Highlight";

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
      const dropdownItem = createItem({ text: room.name, onClick: () => onClick(room.inviteCode) });
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
    <Highlight renderCondition={2}>
      <img src={lockImage} alt="geschlossener Raum" className={styles["lock-icon"]} />
    </Highlight>
  </Dropdown>
);

const createRoomElement = (name) => <div className={styles["room-name"]}>{name}</div>;

export default function Navbar() {
  const {
    user,
    getAssignedRooms,
    setActiveRoomByInviteCode,
    joinRoom,
    getClassRoomName,
    getUserId,
  } = useStoreContext();
  const { showContent, closeModal } = useModalContext();
  const addRoomModal = <AddRoomModal onSubmit={joinRoom} closeModal={closeModal} user={user} />;
  const openModal = () => showContent(addRoomModal);
  const customStyle = {
    nav: styles["navbar"],
    item: styles["item"],
  };

  // openModal();
  const assignedRooms = getAssignedRooms();
  const userId = getUserId();
  const setActiveRoom = (inviteCode) => setActiveRoomByInviteCode(userId, inviteCode);
  const dropdownItems = createDropdownItems(assignedRooms, setActiveRoom, openModal);
  const closedRoomIcon = createClosedRoomIcon(dropdownItems);
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
          {/* <AccountActions user={user} customStyle={customStyle} /> */}
          <>
            <li className={customStyle.item}>
              {activeRoomName}
            </li>
            <li className={customStyle.item}>
              {closedRoomIcon}
            </li>
          </>
        </div>
      </ul>
      <BurgerMenu isTop={false} />
    </nav>
  );
}
