import moment from "moment";

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

export const getTimeStamp = () => moment().format("HH-mm-ss");

export const getDatum = () => moment().format("YYYY-MM-DD");
