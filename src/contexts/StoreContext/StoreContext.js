import React, { useState, useEffect, useContext } from "react";
import Cookie from "js-cookie";

import UserApi from "../../api/UserApi";
import StoreHelper from "./StoreHelper";

const StoreContext = React.createContext();
const { Provider } = StoreContext;

const FakeRoomFacade = (() => {
  const FAKE_ROOMS = [
    { id: 1, inviteCode: 446832, name: "Klassenraum der 9b" },
    { id: 2, inviteCode: 654321, name: "10c" },
    { id: 3, inviteCode: 234561, name: "Informatik mit Simon" },
  ];
  let counter = 0;

  const convertToNumber = (input) => {
    if (typeof input === "string") return parseInt(input, 10);
    if (typeof input === "number") return input;
    return undefined;
  };

  const get = ({ inviteCode }) => {
    const foundRoom = FAKE_ROOMS.find((room) => room.inviteCode === convertToNumber(inviteCode));
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

const saveJoinedRooms = (userId, rooms) => {
  const value = { rooms };
  renewLocalStorage(`${userId}-rooms`, value);
};

const saveActiveRoom = (userId, room) => {
  const value = { room };
  renewLocalStorage(`${userId}-active-room`, value);
};

const checkIfAlreadyInRoom = (rooms, inviteCode) => {
  const foundRoom = rooms.find((room) => room.inviteCode === inviteCode);
  return !!foundRoom;
};

const loadJoinedRooms = (userId) => {
  const loadedContent = Cookie.getJSON(`${userId}-rooms`);
  if (loadedContent) return loadedContent.rooms;
  return [];
};

const loadActiveRoom = (userId) => {
  const activeRoom = Cookie.getJSON(`${userId}-active-room`);
  if (activeRoom) return activeRoom.room;
  return undefined;
};

const Store = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [categoryList, setCategoryList] = useState(undefined);
  const [slugList, setSlugList] = useState(undefined);
  const [classRoom, setClassRoom] = useState(undefined);
  const [assignedRooms, setAssignedRooms] = useState([]);

  const setActiveRoom = (userId, newRoom) => {
    setClassRoom(newRoom);
    saveActiveRoom(userId, newRoom);
  };

  useEffect(() => {
    StoreHelper.loadContent((newCategoryList, newSlugList, recognisedUser) => {
      setCategoryList(newCategoryList);
      setSlugList(newSlugList);
      setUser(recognisedUser);
    });
  }, []);

  useEffect(() => {
    if (user) {
      const { id } = user;
      const loadedRoomFromCookie = loadJoinedRooms(id);
      const loadedActiveRoomFromCookie = loadActiveRoom(id);
      setAssignedRooms(loadedRoomFromCookie);
      setActiveRoom(id, loadedActiveRoomFromCookie);
    }
  }, [user]);

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

  const getClassRoomInviteCode = () => {
    if (classRoom) return classRoom.inviteCode;
    return null;
  };

  const getAssignedRooms = () => assignedRooms;

  const getClassRoomName = () => {
    if (classRoom) return classRoom.name;
    return undefined;
  };


  const setActiveRoomByInviteCode = (userId, inviteCode) => {
    const activeRoom = FakeRoomFacade.get({ inviteCode });
    setActiveRoom(userId, activeRoom);
  };

  const joinRoom = (userId, inviteCode) => {
    const response = new Promise((resolve) => {
      setTimeout(() => {
        if (!checkIfAlreadyInRoom(assignedRooms, inviteCode)) {
          const newRoom = FakeRoomFacade.get(inviteCode);
          const newListOfAllRooms = addRoomToListOfRooms(assignedRooms, newRoom);
          saveJoinedRooms(userId, newListOfAllRooms);
          setAssignedRooms(newListOfAllRooms);
          setActiveRoom(userId, newRoom);
        }
        resolve();
      }, 600);
    });
    return response;
  };

  const createPrivateRoom = (userId) => {
    const newRoom = FakeRoomFacade.create();
    const newListOfAllRooms = addRoomToListOfRooms(assignedRooms, newRoom);
    saveJoinedRooms(userId, newListOfAllRooms);
    setAssignedRooms(newListOfAllRooms);
    setActiveRoom(userId, newRoom);
    return newRoom.inviteCode;
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
        getClassRoomInviteCode,
        getClassRoomName,
        getAssignedRooms,
        setActiveRoomByInviteCode,
        joinRoom,
        createPrivateRoom,
      }}
    >
      {children}
    </Provider>
  );
};

const useStoreContext = () => useContext(StoreContext);

export { Store, Provider as StoreProvider, useStoreContext };
