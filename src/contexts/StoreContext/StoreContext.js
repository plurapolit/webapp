import React, { useState, useEffect, useContext } from "react";
import Cookie from "js-cookie";

import UserApi from "../../api/UserApi";
import StoreHelper from "./StoreHelper";

const StoreContext = React.createContext();
const { Provider } = StoreContext;

const FakeRoomFacade = (() => {
  const FAKE_ROOMS = [
    { id: 1, invideCode: 123456, name: "Klassroom der 9b" },
    { id: 2, invideCode: 654321, name: "10c" },
    { id: 3, invideCode: 234561, name: "Informatik mit Simon" },
  ];
  let counter = 0;

  const convertToNumber = (input) => {
    if (typeof input === "string") return parseInt(input, 10);
    if (typeof input === "number") return input;
    return undefined;
  };

  const get = ({ invideCode }) => {
    const foundRoom = FAKE_ROOMS.find((room) => room.invideCode === convertToNumber(invideCode));
    if (foundRoom) return foundRoom;
    return undefined;
  };

  const create = () => {
    const createdRoom = FAKE_ROOMS[counter];
    counter += 1;
    return createdRoom;
  };

  return { get, create };
})();

const validateLocalStorage = (searchText) => !!Cookie.get(searchText);

const renewLocalStorage = (searchText, obj) => {
  const alreadySaved = validateLocalStorage(searchText);
  if (alreadySaved) {
    Cookie.remove(searchText);
  }
  Cookie.set(searchText, obj);
};

const addRoomToListOfRooms = (rooms, newRoom) => {
  const roomsWithNewRoom = [
    ...rooms,
    { room: newRoom },
  ];
  return roomsWithNewRoom;
};

const saveJoinedRooms = (user, rooms) => {
  const value = { user: { ...user }, rooms };
  renewLocalStorage("joinedRooms", value);
};

const saveActiveRoom = (room) => {
  const value = { room };
  renewLocalStorage("activeRoom", value);
};

const checkIfAlreadyInRoom = (rooms, invideCode) => {
  const foundRoom = rooms.find((room) => room.invideCode === invideCode);
  return !!foundRoom;
};

const loadJoinedRooms = () => {
  const loadedContent = Cookie.getJSON("joinedRooms");
  if (loadedContent) return loadedContent.rooms;
  return [];
};

const loadActiveRoom = () => {
  const activeRoom = Cookie.getJSON("activeRoom");
  if (activeRoom) return activeRoom.room;
  return undefined;
};

const Store = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [categoryList, setCategoryList] = useState(undefined);
  const [slugList, setSlugList] = useState(undefined);
  const [classRoom, setClassRoom] = useState(undefined);
  const [assignedRooms, setAssignedRooms] = useState([]);

  const setActiveRoom = (newRoom) => {
    setClassRoom(newRoom);
    saveActiveRoom(newRoom);
  };

  useEffect(() => {
    StoreHelper.loadContent((newCategoryList, newSlugList, recognisedUser) => {
      setCategoryList(newCategoryList);
      setSlugList(newSlugList);
      setUser(recognisedUser);
    });
    setAssignedRooms(loadJoinedRooms());
    setActiveRoom(loadActiveRoom());
  }, []);

  useEffect(() => {
    console.log("assignedRooms ", assignedRooms, "classRoom ", classRoom);
  }, [classRoom, assignedRooms]);

  const signUp = async (
    email,
    password,
    firstName,
    lastName,
  ) => {
    const newUser = await UserApi.signUp(email, password, firstName, lastName);
    setUser(newUser);
  };

  const removeUser = () => {
    setUser(undefined);
  };

  const getPanelIdBySlug = (slug) => {
    const slugObj = slugList.find(({ panel }) => panel.slug === slug);
    if (slugObj) return slugObj.panel.id;
    return false;
  };

  const getUserId = () => {
    if (user) return user.id;
    return undefined;
  };

  const getClassRoomId = () => {
    if (classRoom) return classRoom.id;
    return undefined;
  };

  const getAssignedRooms = () => assignedRooms;

  const getClassRoomName = () => {
    if (classRoom) return classRoom.name;
    return undefined;
  };


  const setActiveRoomByInvideCode = (invideCode) => {
    const activeRoom = FakeRoomFacade.get({ invideCode });
    setActiveRoom(activeRoom);
  };

  const joinRoom = (registeredUser, invideCode) => {
    const response = new Promise((resolve) => {
      setTimeout(() => {
        if (!checkIfAlreadyInRoom(assignedRooms, invideCode)) {
          const newRoom = FakeRoomFacade.get(invideCode);
          const newListOfAllRooms = addRoomToListOfRooms(assignedRooms, newRoom);
          saveJoinedRooms(registeredUser, newListOfAllRooms);
          setAssignedRooms(newListOfAllRooms);
          setActiveRoom(newRoom);
        }
        resolve();
      }, 600);
    });
    return response;
  };

  return (
    <Provider
      value={{
        user,
        getUserId,
        categoryList,
        slugList,
        getPanelIdBySlug,
        setUser,
        signUp,
        removeUser,
        getClassRoomId,
        getClassRoomName,
        getAssignedRooms,
        setActiveRoomByInvideCode,
        joinRoom,
      }}
    >
      {children}
    </Provider>
  );
};

const useStoreContext = () => useContext(StoreContext);

export { Store, Provider as StoreProvider, useStoreContext };
