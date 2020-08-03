import React from "react";
import { Link } from "react-router-dom";

import { useStoreContext } from "../../contexts/StoreContext/StoreContext";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import styles from "./Navbar.module.scss";
import lockImage from "../../assets/images/p-lock.svg";
import Dropdown from "../../components/Dropdown/Dropdown";
import Highlight from "../../components/Highlight/Highlight";

const createItem = ({ text, onClick }) => (
  {
    text,
    onClick,
  }
);

const createPublicRoom = (onClick) => ({
  text: "Öffentlich",
  onClick: () => onClick(undefined),
});

const createDropdownItems = (list, onClick) => {
  if (list) {
    const privateRoomItems = list.map(({ room }) => {
      const dropdownItem = createItem({ text: room.name, onClick: () => onClick(room.inviteCode) });
      return dropdownItem;
    });
    const publicRoomItem = createPublicRoom(onClick);
    const dropdownItems = [publicRoomItem, ...privateRoomItems];
    return dropdownItems;
  }
  return undefined;
};

const createClosedRoomIcon = (dropdownItems) => (
  <Dropdown items={dropdownItems}>
    <Highlight renderCondition={4}>
      <div className={styles["lock-icon"]}>
        <img src={lockImage} alt="geschlossener Raum" />
      </div>
    </Highlight>
  </Dropdown>
);

const createRoomElement = (name) => <div className={styles["room-name"]}>{name}</div>;

export default function Navbar() {
  const {
    getAssignedRooms,
    setActiveRoomByInviteCode,
    getClassRoomName,
    getUserId,
  } = useStoreContext();
  const customStyle = {
    nav: styles["navbar"],
    item: styles["item"],
  };

  // openModal();
  const assignedRooms = getAssignedRooms();
  const userId = getUserId();
  const setActiveRoom = (inviteCode) => setActiveRoomByInviteCode(userId, inviteCode);
  const dropdownItems = createDropdownItems(assignedRooms, setActiveRoom);
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
              <Highlight renderCondition={2}>
                {activeRoomName}
              </Highlight>
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
