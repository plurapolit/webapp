import React, { useState, useRef, useContext } from "react";
import ReactModal from "react-modal";

import CloseButton from "../../components/CloseButton/CloseButton";

const defaultStyle = {
  content: {
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    marginTop: "3rem",
    height: "80vh",
    maxHeight: "60rem",
    width: "90vw",
    maxWidth: "50rem",
    overflowY: "auto",
    padding: "2rem",
    borderRadius: "1rem",
    border: "2px solid #4E0CED",
  },
  overlay: {
    backgroundColor: "#000000cc",
  },
};

const ModalContext = React.createContext();
const { Provider } = ModalContext;

const Modal = ({
  show = false,
  children,
}) => {
  const [open, setOpen] = useState(show);
  const style = useRef();
  const label = useRef("PluraPolit");
  const content = useRef(null);
  const closeModal = () => setOpen(false);

  const showContent = (newContent) => {
    content.current = newContent;
    setOpen(true);
  };

  const setStyle = (newStyle) => {
    style.current = newStyle;
  };

  const setLabel = (newLabel) => {
    label.current = newLabel;
  };

  return (
    <>
      <ReactModal
        isOpen={open}
        onRequestClose={closeModal}
        contentLabel={label.current}
        style={style.current ? style.current : defaultStyle}
        ariaHideApp={false}
      >
        <CloseButton onClick={closeModal} />
        {content.current}
      </ReactModal>
      <Provider value={{
        setLabel,
        setStyle,
        showContent,
        isModalOpen: open,
        closeModal,
      }}
      >
        {children}
      </Provider>
    </>
  );
};

const useModalContext = () => useContext(ModalContext);

export { Modal, ModalContext, useModalContext };
