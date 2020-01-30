import { store as notificationStore } from 'react-notifications-component';

const Notification = () => {
  const setNotification = ({ message, title = null, type = 'default', duration = 3000 }) => {
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

  const success = (message, title = null) => {
    setNotification({ message, title, type: 'success' });
  };

  const warning = (message, title = null) => {
    setNotification({ message, title, type: 'warning', duration: 4000 });
  };
  return {
    success,
    warning,
  };
};

export default Notification();
