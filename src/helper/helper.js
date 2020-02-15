import moment from "moment";
import Notification from "./Notification";

export const isLoaded = (condition, resolve, reject = null) => {
  if (condition) {
    return resolve;
  }
  return reject;
};

export const getDataFromEvent = (event) => {
  event.preventDefault();
  const data = {};
  const formElements = Array.from(event.target);
  formElements.forEach((input) => {
    if (input.type !== "submit") {
      data[input.name] = input.value;
    }
  });
  return data;
};

export const getDateOrTime = (timeStemp) => (
  timeStemp.calendar(null, {
    sameDay: "[Today]",
    nextDay: "[Tomorrow]",
    nextWeek: "dddd",
    lastDay: "[Yesterday]",
    lastWeek: "[Last] dddd",
    sameElse: "ll",
  })
);

export const setErrorMessages = (error) => {
  Object.entries(error).forEach(([key, value]) => {
    Notification.warning(value[0], key);
  });
};

export const getTimeStamp = () => moment().format("HH-mm-ss");

export const getDatum = () => moment().format("YYYY-MM-DD");
