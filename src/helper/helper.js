import { store as notificationStore } from 'react-notifications-component';

export const isLoaded = (condition, resolve, reject = null) => {
  if (condition) {
    return resolve;
  }
  return reject;
};

// TODO: überprüfe ob label mit daten schickt
export const getDataFromEvent = (event) => {
  event.preventDefault();
  const data = {};
  const formElements = Array.from(event.target);
  formElements.forEach((input) => {
    if (input.type !== 'submit') {
      data[input.name] = input.value;
    }
  });
  return data;
};

export const setNotification = ({ message, title = null, type = 'default', duration = 3000 }) => {
  notificationStore.addNotification({
    title,
    message,
    type,
    insert: "top",
    container: "top-left",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "zoomOut"],
    dismiss: {
      duration,
      onScreen: false,
      pauseOnHover: true,
      showIcon: true,
    },
  });
};
