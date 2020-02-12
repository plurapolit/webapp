import { store as notificationStore } from "react-notifications-component";

const Notification = () => {
  const setNotification = ({
    message,
    title = null,
    type = "default",
    duration = 3000,
  }) => {
    notificationStore.addNotification({
      title,
      message,
      type,
      insert: "top",
      container: "top-left",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "faster", "fadeOut"],
      dismiss: {
        duration,
        onScreen: false,
        pauseOnHover: true,
        waitForAnimation: false,
        showIcon: true,
        click: true,
        touch: true,
      },
      dismissable: { click: true },
    });
  };

  const success = (message, title = null) => {
    setNotification({ message, title, type: "success" });
  };

  const warning = (message, title = null) => {
    setNotification({
      message,
      title,
      type: "warning",
      duration: 4000,
    });
  };

  const signedIn = (firstName, lastName) => {
    setNotification({
      message: `Hallo ${firstName} ${lastName}, du kannst jetzt Liken und eigene Statements aufnehmen.`,
      type: "success",
    });
  };

  return {
    success,
    warning,
    signedIn,
  };
};

export default Notification();
